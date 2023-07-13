import {
  ADD_ITEM,
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  REMOVE_PRODUCT,
} from "../actions/types/user";

const initialProduct = {
  productCount: 1,
};

export const productReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, productCount: state.productCount + 1 };

    default:
      return state;
  }
};

const cartCollection = [];

export const cartProductReducer = (state = cartCollection, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { ...action.payload }];

    default:
      return state;
  }
};

const cart = [];

export const cartHandle = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_ITEM:
      // check if product is already exist
      const exist = state.find((item) => item._id === product._id);
      if (exist) {
        // increace the quantity
        return state.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }

    case REMOVE_ITEM:
      const exist1 = state.find((item) => item._id === product._id);
      if (exist1.qty === 1) {
        return state.filter((item) => item._id !== product._id);
      } else {
        return state.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    case REMOVE_PRODUCT:
      return state.filter((item) => item._id !== product._id);

    default:
      return state;
  }
};

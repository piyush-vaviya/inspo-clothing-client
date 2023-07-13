import {
  ADD_ITEM,
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  REMOVE_PRODUCT,
} from "./types/user";

export const addProduct = (payload) => {
  return { type: ADD_PRODUCT, payload };
};
export const removeProduct = (payload) => {
  return { type: REMOVE_PRODUCT, payload };
};
export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};
export const addCart = (payload) => {
  return { type: ADD_ITEM, payload };
};
export const removeCart = (payload) => {
  return { type: REMOVE_ITEM, payload };
};

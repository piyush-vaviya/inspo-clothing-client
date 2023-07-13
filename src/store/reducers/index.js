import { cartHandle, cartProductReducer, productReducer } from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productHandle: productReducer,
  cartProductHandle: cartProductReducer,
  cartHandle,
});

export default rootReducer;

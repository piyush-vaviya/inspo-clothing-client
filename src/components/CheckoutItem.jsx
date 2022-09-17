import { useDispatch } from "react-redux";
import { addCart, removeCart, removeProduct } from "../store/actions";

export default function CheckoutItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="checkout-items single-item">
      <div className="d-center">
        <img src={item.imageURL} alt="" className="product-img"></img>
      </div>
      <div className="d-center description">{item.productName}</div>
      <div className="d-center quantity cursor-pointer">
        <div
          onClick={() => {
            dispatch(removeCart(item));
          }}
        >
          ❮
        </div>
        <span> {item.qty}</span>
        <div
          onClick={() => {
            dispatch(addCart(item));
          }}
        >
          {" "}
          ❯{" "}
        </div>
      </div>
      <div className="d-center price">${item.qty * item.price}</div>
      <div className="d-center remove-btn">
        <button
          className="close-button"
          aria-label="Close alert"
          type="button"
          data-close
          onClick={() => dispatch(removeProduct(item))}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

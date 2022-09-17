import { useSelector } from "react-redux";
import "../style/components/navbar.css";

export default function CartDropDown() {
  const cartHandle = useSelector((state) => state.cartHandle);

  console.log(cartHandle.length);
  return (
    <div className="dropdown-collections">
      {cartHandle.length ? (
        cartHandle.map((item, i) => (
          <div className="dropdown-collection" key={i}>
            <img src={item.imageURL} alt=""></img>
            <div className="itemDetails">
              <span>{item.productName}</span>
              <span>
                {item.qty}{" "}
                <i className="ico-times" role="img" aria-label="Cancel"></i>{" "}
                <i className="fas fa-dollar-sign"></i>
                {item.price}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">your cart is empty!</div>
      )}
    </div>
  );
}

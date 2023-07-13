import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";
import Payment from "../components/Payment";
import "../style/pages/checkoutCollection.css";

export default function CheckoutCollection() {
  const cartHandle = useSelector((state) => state.cartHandle);

  const [country, setCountry] = useState([]);

  const getCountries = async () => {
    const data = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population"
    );
    const response = await data.json();
    const allCountries = response.data.map((item) => item.country);

    setCountry(allCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);
  const totalPrice = () => {
    const productPrice = cartHandle.map((item) => item.qty * item.price);
    return productPrice.reduce((total, current) => total + current);
  };

  return (
    <div className="checkout">
      <div className="height-set checkout-items">
        <div className="d-center product-img">product</div>
        <div className="d-center description">description</div>
        <div className="d-center quantity">quantity</div>
        <div className="d-center price">price</div>
        <div className="d-center remove-btn">remove</div>
      </div>
      {cartHandle.map((item, i) => (
        <CheckoutItem key={i} item={item} />
      ))}
      <span className="totalPrice">
        TOTAL : ${cartHandle.length ? totalPrice() : "0"}
      </span>
      <button className="StripeCheckout">
        <span className="stripSpan">Pay now with 💳</span>
      </button>
      <Payment country={country} />
    </div>
  );
}

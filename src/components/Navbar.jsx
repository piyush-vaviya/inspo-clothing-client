import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import GucciLogo from "../images/gucci-icon.png";
import AddToCart from "../images/addToCart-icon.png";
import CartDropDown from "./CartDropdown";
import "../style/components/navbar.css";

export default function Navbar() {
  let navigate = useNavigate();
  let isLogged = localStorage.getItem("loginDone");
  const [showDropdown, setShowDropdown] = useState(false);
  const cartHandle = useSelector((state) => state.cartHandle);

  const signOut = () => {
    alert("wanna logout?");
    localStorage.removeItem("loginDone");
    navigate("/sign");
  };

  const showCartItems = () => {
    setShowDropdown(!showDropdown);
  };

  const totalQuantity = () => {
    const data = cartHandle.map((item) => item.qty);
    return data.reduce((total, current) => total + current);
  };

  const goToCheckout = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="header">
      <img src={GucciLogo} alt="" />
      <div className="header-options">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/shop">
          Shop
        </NavLink>
        <NavLink className="header-link" to="/contact">
          contact
        </NavLink>
        {isLogged ? (
          <NavLink className="header-link" to="/sign" onClick={signOut}>
            sign out
          </NavLink>
        ) : (
          <NavLink className="header-link" to="/sign">
            sign in
          </NavLink>
        )}
        <div className="cart-items" onClick={showCartItems}>
          <img src={AddToCart} alt="" />
          <span className="cartItem-count">
            {cartHandle.length ? totalQuantity() : "0"}
          </span>
          <div
            className="dropdown"
            style={{ display: showDropdown ? "flex" : "none" }}
          >
            <CartDropDown />
            <button className="checkout-btn" onClick={(e) => goToCheckout(e)}>
              go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

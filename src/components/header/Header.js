import React, { useState } from "react";
//style
import "./Header.scss";
import { Link } from "react-router-dom";
//icons
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
//store
import Cart from "../cart/cartCounter/CartCounter";
export default function Header() {
  const [sideBar, setSideBar] = useState("none");
  const handlePress = (ev) => {
    ev.preventDefault();
    setSideBar("flex");
  };
  const handleCloseButton = (ev) => {
    ev.preventDefault();
    setSideBar("none");
  };
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <div onClick={handlePress}>
            <FiMenu className="header__icon" />
          </div>
        </div>
        <div
          className="header__toggleNav"
          style={{
            display: sideBar,
          }}
        >
          <ul>
            <Link to="/" onClick={handleCloseButton} className="header__list">
              <li>home</li>
            </Link>
            <Link
              to="shop"
              onClick={handleCloseButton}
              className="header__list"
            >
              <li>Shop</li>
            </Link>
            <Link to="/" onClick={handleCloseButton} className="header__list">
              <li>home</li>
            </Link>
            <Link to="/" onClick={handleCloseButton} className="header__list">
              <li>home</li>
            </Link>
          </ul>
          <div
          className="header__closeButton"
           
            onClick={handleCloseButton}
          >
            <AiOutlineClose height="0vh" className="header__closeButton--icon" />
          </div>
        </div>

        <Link to="/">
          <div className="header__logo">RANDA</div>
        </Link>
        <div>
          <Cart />
        </div>
      </div>
    </header>
  );
}

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
            <li>home</li>
            <li>Shop</li>
            <li>home</li>
            <li>Shop</li>
          </ul>
          <div style={{ height: "30px", width: "90px" , fontWeight: "700", backgroundColor: 'pink'}} onClick={handleCloseButton}>
            <AiOutlineClose height="0vh"/>
          </div>
        </div>

        <Link to="/">
          <div>RANDA</div>
        </Link>
        <div>
          <Cart />
        </div>
      </div>
    </header>
  );
}

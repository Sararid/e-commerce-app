import React from "react";
import { Link } from "react-router-dom";
//icon
import { BsCart2 } from "react-icons/bs";
//style
import "./CartCounter.scss";
//store
import { useSelector } from "react-redux";

export default function CartCounter() {
    const cart = useSelector((state) => state.cart);
    return (
        <Link to="/cart">
            <div className="cart">
                <BsCart2 className="cart__icon" />
                {cart ? <div className="cart__count">{cart.quantity}</div> : null}
            </div>
        </Link>
    );
}

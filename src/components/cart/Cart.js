import React from 'react'
//icon
import { BsCart2 } from "react-icons/bs";
//style
import "./Cart.scss";
//store
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    //const quantity = cart.map((item) => item.quantity)
    console.log(cart)
    const dispatch = useDispatch();

    return (
        <div className='cart'>
            <BsCart2 className="cart__icon" />
            {cart ? (
                <span className="cart__count">{cart.quantity} </span>
            ) : null}
        </div>

    )
}

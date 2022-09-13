import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { BiMinusCircle } from "react-icons/bi";
//store
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  clear,
} from "../../../redux/features/cart/cartSlice";

export default function CartItem({ item }) {
  const [savedItem, setSavedItem] = useState(false);
  const dispatch = useDispatch();
//poner esta funcion de local storgae en una funciona pcada botton y luego getitem guardarlo en el estado que tego q crear 
  return (
    <>
      <div className="cart__container--card">
        <h2> {item.title} </h2>
        <img
          src={item.image}
          alt={item.title}
          className="cart__container--img"
        />
        <div className="cart__container--title">
          {" "}
          <h3>€{item.price}</h3>
        </div>
        <div className="cart__container--qty">
          <h3> Quantity: {item.quantity}</h3>
          <div>
            <button
              onClick={() => {
                dispatch(increment(item));
                localStorage.setItem("item", JSON.stringify(item));
              }}
            >
              <BsPlusCircle className="cart__container--icon" />
            </button>
            *
            {item.quantity === 1 && (
              <button
                onClick={() => {
                  dispatch(clear(item));
                  localStorage.setItem("item", JSON.stringify(item));
                }}
              >
                <FiTrash className="cart__container--icon" />
              </button>
            )}
            {item.quantity > 1 && (
              <button
                onClick={() => {
                  dispatch(decrement(item));
                  localStorage.setItem("item", JSON.stringify(item));
                }}
              >
                <BiMinusCircle className="cart__container--icon" />{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

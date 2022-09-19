import React, { useState, useEffect } from "react";
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

  const dispatch = useDispatch();

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

          <h3>€{item.price}</h3>
        </div>
        <div className="cart__container--qty">
          <h3> Quantity: {item.quantity}</h3>
          <div>
            <button
              onClick={() => {
                dispatch(increment(item));
              }}
            >
              <BsPlusCircle className="cart__container--icon" />
            </button>
            *
            {item.quantity === 1 && (
              <button
                onClick={() => {
                  dispatch(clear(item));
                }}
              >
                <FiTrash className="cart__container--icon" />
              </button>
            )}
            {item.quantity > 1 && (
              <button
                onClick={() => {
                  dispatch(decrement(item));
                }}
              >
                <BiMinusCircle className="cart__container--icon" />
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

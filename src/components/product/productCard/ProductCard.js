import React from "react";
import { Link } from "react-router-dom";
//component
import "./ProductCard.scss";
//store
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isProductInCart = cart.cartItems.filter(
    (product) => product.id === item.id
  );
  return (
    <>
      <li key={item.id} id={item.id} className="singleProduct">
        <img
          src={item.image}
          alt={item.title}
          className="singleProduct__image"
        />

        <h1 className="singleProduct__title">{item.title}</h1>
        <span className="singleProduct__price">€ {item.price}</span>

        <Link to={`/product/${item.id}`}>
          <button className="singleProduct__btn">View item</button>
        </Link>
        {isProductInCart ? (
          <button
            className="singleProduct__btn"
            onClick={() => {
              dispatch(addToCart(item));
            }}
          >
            Add to cart
          </button>
        ) : null}
      </li>
    </>
  );
}

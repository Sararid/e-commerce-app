import React from 'react';
import { Link } from 'react-router-dom'
//component
import './ProductCard.scss';
//store
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, increament } from '../../redux/features/cart/cartSlice';
export default function ProductCard({ item, onClick }) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    console.log(item.id)
    return (
        <li key={item.id} id={item.id} className="singleProduct">

            <img src={item.image} alt={item.title} className="singleProduct__image" />

            <h1 className="singleProduct__title">{item.title}</h1>
            {/* <span className="singleProduct__category"> {category}</span> */}

            <span className="singleProduct__price">€ {item.price}</span>


            <Link to={`/product/${item.id}`}>
                <button className="singleProduct__btn">View item</button>
            </Link>
            <button
                className="singleProduct__btn"
                onClick={() => {
                    dispatch(addToCart(item))
                }}
            >
                Add to cart
            </button>


            {/* {cart.cartItems.length < 0(
                        <button
                            className="singleProduct__btn"
                            onClick={() => addToCart(item)}
                        >
                            Add to cart
                        </button>
                    )}
                    {cart.cartItems && (
                        <button className="singleProduct__btn">Add more</button>
                    )} */}

        </li>

    )
}

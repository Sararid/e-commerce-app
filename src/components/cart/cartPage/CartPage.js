import React from "react";
//icon
import { AiOutlineArrowLeft } from "react-icons/ai";
//style
import "../../cart/CartPage.scss";
//route
import { Link } from "react-router-dom";
//store
import { useSelector } from 'react-redux';
//component
import CartItem from '../cartItem/CartItem'
import CartTotal from "../cartTotal/CartTotal";

export default function CartPage() {
    const cart = useSelector((state) => state.cart);
    console.log('cartpage', cart.cartItems)
    return (
        <section style={{ marginTop: "2rem" }} >
            <div className="cart__title">
                <Link to="/shop">
                    <button className="cart__btn">
                        <AiOutlineArrowLeft />
                        Back to Shop
                    </button>
                </Link>
                <h1>CART</h1>
            </div>
            <section className="cart">
                {cart.cartItems.length === 0 ? (
                    <div className="cart__container">
                        <h2> Your Cart is empty</h2>
                    </div>
                ) : (
                    <>
                        <div className="cart__container">
                            {
                                cart.cartItems.map((item) => (
                                    <CartItem item={item} />
                                ))
                            }
                        </div>
                        <CartTotal
                            itemCount={cart.quantity}
                            total={cart.totalAmount}

                        />
                    </>
                )}
            </section>
        </section>
    );
};


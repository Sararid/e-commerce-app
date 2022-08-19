import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./CartPage.scss";
import { Link } from "react-router-dom";
//store
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addToCart, clear } from "../../../redux/features/cart/cartSlice";
import CartItem from '../cartItem/CartItem'
import CartTotal from "../cartTotal/CartTotal";
export default function CartPage() {
    const dispatch = useDispatch()
    // const {
    //     cartItems,
    //     itemCount,
    //     total,
    //     increase,
    //     decrease,
    //     removeProduct,
    //     clearCart,
    // } = useContext(CartContext);

    // const addRemove = { increase, decrease, removeProduct };
    const cart = useSelector((state) => state.cart);
    console.log(cart)
    return (
        <section >
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


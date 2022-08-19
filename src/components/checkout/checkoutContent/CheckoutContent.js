import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Payment from "../payment/Payment";
import './CheckoutContent.scss'
//store
import { useSelector, useDispatch } from 'react-redux';
export default function CheckoutContent() {
    //  const { itemCount, total } = useContext(CartContext);
    const cart = useSelector((state) => state.cart);
    console.log(cart)
    return (
        <>
            <section className="container">
                <div className="container__checkout">

                    <div className="checkout">
                        <Link to="/cart">
                            <button className="checkout__btn">Go back to cart</button>
                        </Link>
                    </div>
                    <div className="checkout__summary">
                        <h1 className="checkout__title">Checkout Summary</h1>
                        <h2 className="checkout__subtitle">
                            TOTAL ITEMS:
                            <span className="checkout__subtitle--item"> {`  ${cart.quantity}`}</span>
                        </h2>
                        <h2 className="checkout__subtitle">
                            AMOUNT TO PAY:  <span className="checkout__subtitle--item"> {`  €${cart.totalAmount}`}</span>
                        </h2>
                    </div>
                </div>
                <Payment total={cart.totalAmount} />
            </section>
        </>
    );
};


import React, { useEffect } from 'react';
import './ProcessedPayment.scss'
import { Link } from 'react-router-dom';
//store
import { useSelector, useDispatch } from 'react-redux';
import { clear, clearCartAfterPayment } from '../../../redux/features/cart/cartSlice';
export default function ProcessedPayment() {
    const cart = useSelector((state) => state.cart);

    console.log(cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearCartAfterPayment(cart.cartItems))
    }, [])
    return (
        <div className="processpay">

            <h1 className="processpay__title"> Thank you for your order</h1>

            <p>We are currently processing your order and
                we will send you a confirmation email shortly...
            </p>
            <div>
                <Link to="/">
                    <button className="processpay__btn">


                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div >
    )
}


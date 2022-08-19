import React from 'react';
import './ProcessedPayment.scss'
import { useEffect, useContext } from 'react';
export default function ProcessedPayment() {
    // const { clearCart, cartItems } = useContext(CartContext);
    // useEffect(() => {
    //     if (cartItems.length !== 0) { clearCart() }
    // }, [clearCart, cartItems]);

    return (
        <div className="processpay">

            <h1 className="processpay__title"> Thank you for your order</h1>

            <p>We are currently processing your order and
                we will send you a confirmation email shortly...
            </p>
            <div>
                {/* <button className="processpay__btn"
                    onClick={() => history.push('/shop')}>
                    Continue Shopping
                </button> */}
            </div>
        </div>
    )
}


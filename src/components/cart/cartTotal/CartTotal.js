import React from "react";
import { Link } from "react-router-dom";
//style
import './CartTotal.scss';

export default function CartTotal({ total, itemCount }) {
  return (
    <div className="cart__total">
      <p>TOTAL ITEMS: {itemCount}</p>
      <p>{`TOTAL: €${total}`}</p>

      <Link to="/checkout">
        <button>CHECKOUT</button>
      </Link>
    </div>
  );
}

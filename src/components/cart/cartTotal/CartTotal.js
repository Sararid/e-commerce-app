import React from 'react'
import { Link } from 'react-router-dom';


export default function CartTotal({ total, itemCount }) {
    return (
        <div className='cart__container--total'>


            <p>TOTAL ITEMS: {itemCount}</p>
            <p>{`TOTAL: €${total}`}</p>

            <Link to='/checkout'><button>CHECKOUT</button></Link>

        </div>
    )
}



import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../redux/features/Product/productSlice'
import { AiOutlineHeart } from 'react-icons/ai'
//style
import './NewArrivals.scss';

export default function NewArrivals() {
    const dispatch = useDispatch()
    const stateProducts = useSelector((state) => state.products)
    console.log(stateProducts.products)

    // dispatch our thunk when component first mounts
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <section className='newArrival'>
            <h1>
                New in store
            </h1>
            <p className='newArrival__description'>Lorem ipsum dolor sit, amet esse dolore dicta consectetur quos ipsa. Eaque facilis suscipit odit? Similique molestias, tempora deleniti a atque aliquam.</p>
            <ul className='newArrival__list'>
                {stateProducts.products.slice(0, 3)

                    .map((item, index) => {
                        return (
                            <li className='newArrival__list--items' key={item.id}>
                                <p className='newArrival__list--title'>{item.title}</p>

                                <img src={item.image} alt="product" srcset="" width='200px' height='200px' />
                                <div className='newArrival__list--icon'>
                                    <span>{item.price}€</span>
                                    <AiOutlineHeart />
                                </div>
                            </li>
                        )
                    })}
            </ul>

        </section>
    )
}

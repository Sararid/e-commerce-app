import React, { useEffect } from 'react'
//store
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/features/Product/productSlice'
import ProductCard from '../product/ProductCard'
import { addToCart, increament } from '../../redux/features/cart/cartSlice'
//style
import './FeaturedProducts.scss'

export default function FeaturedProducts() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);

    const stateProducts = useSelector((state) => state.products.products)
    //console.log(stateProducts)
    const productList = stateProducts
        .filter((item, i) => i < 4)
        .map((item, index) =>
            <>
                <ProductCard
                    item={item}


                />

            </>

        )

    // dispatch our thunk when component first mounts
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className='featuredCollection'>
            <h1>Featured Collection</h1>
            {productList}

        </div>
    )
}

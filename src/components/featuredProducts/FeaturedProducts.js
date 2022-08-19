import React, { useEffect } from 'react'
//store
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/features/Product/productSlice'
import ProductCard from '../product/ProductCard'
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
            //   <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <ProductCard
                item={item}


            />

            //     </ul>

        )

    // dispatch our thunk when component first mounts
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <section className='featuredCollection'>
            <h1>Featured Collection</h1>
            <div style={{ display: 'flex' }}> <ul className='featuredCollection__list'>
                {productList}
            </ul> </div>


        </section>
    )
}

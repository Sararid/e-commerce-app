import React, { useEffect } from 'react'
//store
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/features/Product/productSlice'
//component
import ProductCard from '../components/product/ProductCard'
//style
export default function Shop() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);

    const stateProducts = useSelector((state) => state.products.products)
    //console.log(stateProducts)
    const productList = stateProducts
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

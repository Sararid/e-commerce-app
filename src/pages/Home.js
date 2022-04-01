import React, { useEffect } from 'react';
import '../Styles/Pages/Home.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../redux/features/Product/productSlice';
import Hero from '../components/Hero/Hero';

export default function Home() {
    const dispatch = useDispatch()
    const stateProducts = useSelector((state) => state.products)
    console.log(stateProducts)

    // dispatch our thunk when component first mounts
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <main className='main'>
            <Hero />
            <div>
                {/* {stateProducts.products.map((item) =>
                    <h2>{item.id}</h2>
                )} */}
            </div>
        </main>
    )
}

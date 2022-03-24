import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/features/Product/productSlice';

export default function Home() {
    const { products, loading } = useSelector((state) => state.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())

    }, [])

    return (
        <div>Home
            {products.map((item) =>
                <h2>{item.id}</h2>
            )}
        </div>
    )
}

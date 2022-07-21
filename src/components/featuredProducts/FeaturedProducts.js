import React from 'react'
//store
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../store/productSlice/productSlice'
export default function FeaturedProducts() {
    const product = useSelector((state) => state.product.value)
    console.log('hpña', product)
    const dispatch = useDispatch()
    return (
        <div>FeaturedProducts</div>
    )
}

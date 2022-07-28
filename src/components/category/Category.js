import React, { useEffect } from 'react'
//style
import './Category.scss'
//store
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/features/Product/productSlice'
export default function Category() {
    const dispatch = useDispatch()
    const stateProducts = useSelector((state) => state.products.products)
    console.log(stateProducts)
    const productList = stateProducts.map((item, index) => console.log(item.category))

    // dispatch our thunk when component first mounts
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <section className="category">
            <h1>            BROWSE OUR CATEGORIES
            </h1>
            <div className="categoryContainer">
                <div>
                    <div className="categoryContainer__item">Men clothes</div>
                    <div className="categoryContainer__item">Electronics</div>
                </div>
                <div>
                    <div className="categoryContainer__item">Jewelery</div>
                    <div className="categoryContainer__item">Women clothes</div>
                </div>
            </div>
        </section>

    );
}

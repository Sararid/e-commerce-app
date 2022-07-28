import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/Product/productSlice'
import cartReducer from './features/cart/cartSlice'
export const store = configureStore({
    reducer: {

        products: productSlice,
        cart: cartReducer

    },
})
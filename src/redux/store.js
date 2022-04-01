import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/Product/productSlice'
export const store = configureStore({
    reducer: {

        products: productSlice,

    },
})
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../services/api'


export const getProducts = createAsyncThunk('product/getProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products').then((data) => data.json())
    return response
})

const initialState = {
    products: [],
    loading: false
}

export const productSlice = createSlice({
    name: 'products',
    initialState,

    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.loading = true
        },
        [getProducts.fulfilled]:
            (state, action) => {
                state.loading = false
                state.products = action.payload


            },
        [getProducts.rejected]:
            (state, action) => {
                state.loading = false
            }
    },

})


// Action creators are generated for each case reducer function
export const { extraReducers } = productSlice.actions

export default productSlice.reducer
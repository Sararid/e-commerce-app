import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: [],
    loading: false,
    errors: false
}

export const productSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        getProduct: (state) => {
            state.loading = true
        },
        getProductSuccess:
            (state, action) => {
                state.loading = false
                state.errors = false
                state.products = action.payload
                console.log(action.payload)
            },
        getProductRejected:
            (state) => {
                state.loading = false
                state.errors = true
            }
    },

})


// Action creators are generated for each case reducer function
export const { getProduct, getProductSuccess, getProductRejected } = productSlice.actions

export default productSlice.reducer

export const productsSelector = state => state.products


// Asynchronous thunk action
export function getProducts() {
    return async dispatch => {
        dispatch(getProduct())
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            dispatch(getProductSuccess(data))
        } catch (error) {
            dispatch(getProductRejected())
        }
    }
}
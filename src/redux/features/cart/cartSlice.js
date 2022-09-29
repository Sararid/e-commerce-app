import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    quantity: 0,
    cartItems: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            const isItemExist = state.cartItems.find(
                (item) => item.id === payload.id
            );
            if (!isItemExist) {
                state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
            } else {
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
            state.quantity++;
            state.totalAmount += payload.price;
        },
        increment(state, { payload }) {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            state.quantity++;
            state.totalAmount += payload.price;

        },
        decrement(state, { payload }) {
            const subItem = state.cartItems.find((item) => item.id === payload.id);
            if (subItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== subItem.id
                );
            } else {
                subItem.quantity -= 1;
            }
            state.quantity--;
            state.totalAmount -= subItem.price;
        },

        clear(state, { payload }) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== payload.id
            );
            state.quantity -= payload.quantity;
            state.totalAmount -= payload.price * payload.quantity;
        },
        clearCartAfterPayment(state) {
            state.cartItems = initialState.cartItems
            state.quantity = initialState.quantity;
            state.totalAmount = initialState.totalAmount;
        }


    }
});

export const { addToCart, increment, decrement, clear, clearCartAfterPayment } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;

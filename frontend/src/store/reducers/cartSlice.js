import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cart = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            return [...state, {...action.payload}];
        }
    }
})

export default cart.reducer
export const {addProduct} = cart.actions
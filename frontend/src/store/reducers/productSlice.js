import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        product(state, action) {
        return { ...action.payload[0] };
        },
    },
});

export const { product } = productSlice.actions;
export default productSlice.reducer;

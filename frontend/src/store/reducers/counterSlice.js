import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const counterProduct = createSlice ({
    name: "counter",
    initialState,
    reducers: {
        incr(state) {
            return state < 100 ? state + 1 : state
        },
        decr(state) {
            return state > 1 ? state - 1 : state
        },
        set(state, action) {
            return action.payload >= 1 && action.payload < 100 ? action.payload : state;
        }
    }
})

export default counterProduct.reducer
export const {incr, decr, set} = counterProduct.actions


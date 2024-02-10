import { createSlice } from "@reduxjs/toolkit";
import { product } from "./productSlice";

const initialState = [];

const cart = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            const productExists = state.findIndex(product => product.id === action.payload.id);
            if (productExists !== -1) {
                state[productExists].quantity += action.payload.quantity;
            } else {
                state.push({ ...action.payload });
            }
        },
        incrCart(state, action) {
            return state.map((product) => (product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product));
        },
        decrCart(state, action) {
            return state.map((product) => (product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product));
        },
        setCart(state, action) {
            return state.map((product) => (product.id === action.payload.id ? { ...product, quantity: action.payload.quantity } : product))
        }
    }
})

export default cart.reducer;
export const { addProduct, incrCart, decrCart, setCart } = cart.actions;

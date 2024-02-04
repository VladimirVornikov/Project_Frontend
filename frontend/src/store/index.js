import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsAllSlice from "./reducers/productsAllSlice";
import productSlice from "./reducers/productSlice";
import counterSlice from "./reducers/counterSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import cartSlice from "./reducers/cartSlice";

const rootReducer = combineReducers({
    categories: categoriesSlice,
    allProducts: productsAllSlice,
    product: productSlice,
    counter: counterSlice,
    cart: cartSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

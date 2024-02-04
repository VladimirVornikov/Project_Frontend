import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./reducers/categoriesReducer";
import productsAllSlice from "./reducers/productsAllSlice";
import productSlice from "./reducers/productSlice";
import counterSlice from "./reducers/counterSlice";




const rootReducer = combineReducers({
    categories: categoriesReducer,
    allProducts: productsAllSlice,
    product: productSlice,
    counter: counterSlice,

})

export const store = configureStore({
    reducer: rootReducer
})

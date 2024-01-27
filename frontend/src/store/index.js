import {combineReducers, createStore, applyMiddleware} from "redux";
import { categoriesReducer } from "./reducers/categoriesReducer";
import {thunk} from 'redux-thunk'
import { categoryProduct } from "./reducers/categoryByIdReducer";
import { productsAllReducer } from "./reducers/productsAllReducer";



const rootReducer = combineReducers({
    categories: categoriesReducer,
    category: categoryProduct,
    allProducts: productsAllReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
import {combineReducers, createStore, applyMiddleware} from "redux";
import { productsAllReducer } from "./reducers/productsAllReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productReducer } from "./reducers/productReducer";
import {thunk} from 'redux-thunk'
import { counterProduct } from "./reducers/counter";



const rootReducer = combineReducers({
    categories: categoriesReducer,
    allProducts: productsAllReducer,
    product: productReducer,
    counter: counterProduct,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
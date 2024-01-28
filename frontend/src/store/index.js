import {combineReducers, createStore, applyMiddleware} from "redux";
import { productsAllReducer } from "./reducers/productsAllReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productReducer } from "./reducers/productReducer";
import {thunk} from 'redux-thunk'



const rootReducer = combineReducers({
    categories: categoriesReducer,
    allProducts: productsAllReducer,
    product: productReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
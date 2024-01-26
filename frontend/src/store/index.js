import {combineReducers, createStore, applyMiddleware} from "redux";
import { categoriesReducer } from "./reducers/categoriesReducer";
import {thunk} from 'redux-thunk'
import { categoryProduct } from "./reducers/categoryByIdReducer";



const rootReducer = combineReducers({
    categories: categoriesReducer,
    category: categoryProduct,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
import {combineReducers, createStore, applyMiddleware} from "redux";
import { categoriesReducer } from "./reducers/categoriesReducer";
import {thunk} from 'redux-thunk'



const rootReducer = combineReducers({
    categories: categoriesReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
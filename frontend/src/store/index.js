import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsAllSlice from "./reducers/productsAllSlice";
import productSlice from "./reducers/productSlice";
import counterSlice from "./reducers/counterSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import cartSlice from "./reducers/cartSlice";

import storage from "redux-persist/lib/storage";
import {  persistStore, persistReducer, PERSIST } from 'redux-persist';

const persistConfig = {
    key: "localStore",
    storage,
    whitelist: ["cart"],
};

const rootReducer = combineReducers({
    categories: categoriesSlice,
    allProducts: productsAllSlice,
    product: productSlice,
    counter: counterSlice,
    cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions:  PERSIST
            },
        }),
    
});

export const persistor = persistStore(store); 

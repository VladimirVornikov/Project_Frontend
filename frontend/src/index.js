import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import React from 'react';
import App from './App';
import { PersistGate } from "redux-persist/integration/react";


export const ROOT_URL = "http://localhost:3333"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store ={store}>
        <Router>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Router>
    </Provider>
);


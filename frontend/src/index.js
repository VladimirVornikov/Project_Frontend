import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';
import App from './App';


export const ROOT_URL = "http://localhost:3333"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store ={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducers from './reducers'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(reducers)}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

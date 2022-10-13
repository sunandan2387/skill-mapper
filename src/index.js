import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App';
// import { createStore } from 'redux';

// //action
// const increment = () => {
//     return {
//         type: 'PROGRESS'
//     }
// }
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }
// //reducer
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'PROGRESS':
//             return state=;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }
// //store
// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// //dispatch

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
        <App />
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

window.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("content");
 
    window.store = configureStore()
    ReactDOM.render(<Root store={store} />, root);
});

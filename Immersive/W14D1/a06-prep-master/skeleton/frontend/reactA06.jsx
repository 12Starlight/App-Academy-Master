import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


// Need to find the element from our rails backend
// use react Dom to render all that good stuff
// will need to pass in the store


document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  let root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});
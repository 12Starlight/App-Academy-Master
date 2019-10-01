import React from "react";
import ReactDOM from "react-dom";
import { fetchAllPokemon } from "./util/api_util";
import { receiveAllPokemon } from "./actions/pokemon_actions";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let newState = {};
      action.pokemon.forEach(pokemon => {
        newState[pokemon.id] = pokemon;
      }); 
      return newState; 
    default:
      return state; 
  }
};

export default pokemonReducer;
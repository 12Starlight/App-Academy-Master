import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session"

// Create a default state
const _nullSession = {
  currentUser: null // key of currentUser, value of null
};

// Build reducer
export default (state = _nullSession, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession; 
    default:
      return state;
  }
};

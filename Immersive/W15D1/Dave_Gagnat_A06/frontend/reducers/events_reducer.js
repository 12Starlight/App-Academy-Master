import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT,
} from '../actions/event_actions';
import merge from 'lodash/merge';

const eventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      newState = merge({}, oldState, { [action.event.id]: action.event })
      return newState;
    case REMOVE_EVENT:
      newState = merge({}, oldState);
      delete newState[action.eventId];
      return newState; 
    default:
      return oldState;
  }
};

export default eventsReducer;

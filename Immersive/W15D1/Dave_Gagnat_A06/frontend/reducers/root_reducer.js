import EventsReducer from './events_reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  events: EventsReducer
});


export default rootReducer;
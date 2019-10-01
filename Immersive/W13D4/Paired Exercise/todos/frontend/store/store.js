import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

export default () => { 
  const store = createStore(rootReducer); 
  return store
}

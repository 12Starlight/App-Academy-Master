import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';

/*
  Takes an object where the slice of our state points to the reducer that will
  handle that slice of our state. So, we use combine reducers to create the 
  slices by basically telling each keys, we want to go to each reducer 
  
  export default combineReducers({posts: PostsReducer});
*/

const rootReducer = combineReducers({
  posts: PostsReducer
});


export default rootReducer;



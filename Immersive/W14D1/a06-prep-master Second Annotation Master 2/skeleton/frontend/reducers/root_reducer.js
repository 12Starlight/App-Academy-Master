import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';


/* 
  Takes an object where the slice of your state points to the reducer that will
  handle that slice of your state. So, we use combine reducers to create the
  slices by basically telling each keys we want to go to each reducer 
*/ 

export default combineReducers({posts: PostsReducer});
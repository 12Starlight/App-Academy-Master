import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';

export const rootReducer = combineReducers({
  posts: PostsReducer
});


export default rootReducer;
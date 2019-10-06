import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { combineReducers } from 'redux';


const msp = (state) => {
  return {
    posts: Object.values(state.posts)
  };
};

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    // if delete post is expecting an id, the prop also needs to have an id
    deletePost: (id) => dispatch(deletePost(id))
  }
}


export default connect(msp, mdp)(PostIndex);
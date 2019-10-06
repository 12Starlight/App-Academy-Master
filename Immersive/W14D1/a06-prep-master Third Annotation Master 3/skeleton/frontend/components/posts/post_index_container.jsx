import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';


// mapStateToProps
const msp = (state) => { // Redux store state
  let posts = Object.values(state.posts) // array

  return ({
    posts: posts
  });
};

// mapDispatchToProps
const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    // if delete post is expecting an id, the propl also needs to have an id
    deletePost: (id) => dispatch(deletePost(id))
  }
}


export default connect(msp, mdp)(PostIndex)
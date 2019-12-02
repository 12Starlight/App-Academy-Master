import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';


// mapStateToProps // Object.values(state.posts)
const msp = (state) => { 
  let posts = Object.values(state.posts) 

  return ({
    posts: posts
  });
};

// mapDispatchToProps
const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id))
  }
}


export default connect(msp, mdp)(PostIndex)
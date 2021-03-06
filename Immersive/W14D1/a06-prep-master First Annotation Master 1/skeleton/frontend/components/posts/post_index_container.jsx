import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';


const mapStateToProps = state => { // Redux store state
  let posts = Object.values(state.posts) // array
  return ({
    posts: posts
  })
}

const mapDispatchToProps = dispatch => {

  return({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id)),
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  // we will look in our ownProps to find exactly which one the user has 
  // navagated to 
  let postId = ownProps.match.params.postId;
  return({
    // use postId to to key in directly to our post slice of state
    post: state.posts[postId]
  })
}

const mapDispatchToProps = dispatch => {

  return({
    // we want to pass in a specific id to match a single post 
    fetchPost: (id) => dispatch(fetchPost(id))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
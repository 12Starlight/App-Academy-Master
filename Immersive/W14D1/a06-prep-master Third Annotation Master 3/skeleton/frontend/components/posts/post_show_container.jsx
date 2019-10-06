import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  // we will look in our ownProps to find exectly which one the user has 
  // navigated to
  let postId = ownProps.match.params.postId;
  return({
    // use postId to key in directly to our post slice of state
    post: state.posts[postId]
  });
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return({
    // we want to pass in a specific id to match a single post
    fetchPost: (id) => dispatch(fetchPost(id))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(PostShow)
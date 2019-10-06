import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost, fetchPosts } from '../../actions/post_actions';

const msp = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.postId]
  };
};

const mdp = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id))
  };
};


export default connect(msp, mdp)(PostShow)
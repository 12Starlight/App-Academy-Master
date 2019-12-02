import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';


// mapStateToProps // post:
const mapStateToProps = (state) => {
  return ({
    post: { title: "", body: "" },
    formType: "Create Post"
  });
};

// mapDispatchToProps // action:
const mapDispatchToProps = (dispatch) => {
  return ({
    action: (post) => dispatch(createPost(post))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
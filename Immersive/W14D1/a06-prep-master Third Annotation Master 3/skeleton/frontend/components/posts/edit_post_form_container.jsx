import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';

/*
  The edit post form container is an actual component. It needs some extra
  behavior that our standard post form did not have. That behavior is fetching
  the post when it mounts.

  We do want to put that fetching of the post upon mount into our postForm. Our
  create does not have to do that. I want basically to make another wrapper my
  EditPostForm which fetches it onMount and then passes it down to the PostForm
*/


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  /*
    we can get access to postId when the actual route, that app.jsx route that
    is rendering the container. It has that wildcard of postId which means we
    can key into params, and get those values as long as we have either a 
    componenet wrapped in with router or we have a route component 
  
    OMPP = ownProps.match.params.postId
  */

  let postId = ownProps.match.params.postId;
  let post = state.posts[postId];

  return({
    post: post,
    // we know which form we are in based on which container we are hitting
    formType: "Update Post"
  });
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPost: (id) => dispatch(fetchPost(id)),
    action: (post) => dispatch(updatePost(post))
  });
};


class EditPostForm extends React.Component {
  /*
    anytime we see a fetchPost, we want to make sure we actually fetch the 
    appropriate fetchPost. We are not passing down fetchPost to our fetchForm
    component. So, we know that is not why we have it here.
  */
  componentDidMount() {
    let postId = this.props.match.params.postId;
    this.props.fetchPost(postId); // we want a specific id for a specific post
  }


  render() {
    const { action, formType, post } = this.props;
    return (
      <PostForm
        /*
          we want these to be the props inside of the EditPostForm

          we have this post form component which we are rendering through our
          edit post form component here ( ... go to create_post_form_container )

          so we want to make sure that no matter what comes out on post_form
          that the api is still going to be the same, that is why we use action 
        */
        action={action}
        formType={formType}
        post={post} />
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)
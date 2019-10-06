import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
// we are are only importing createPost, so we need to use it
import { createPost } from '../../actions/post_actions';
 
/*
  The create post form container is a simple mapStateToProps, 
  mapDispatchToProps, and then PostForm
*/


const mapStateToProps = state => {

  return({
    post: {title: "", body: ""},
    formType: "Creat Post"
  })
}


// actions need to go in mapDispatchToProps
const mapDispatchToProps = dispatch => {

  return ({
    // but, also through our create post form component here

    /*
      now we can do the same thing here, instead of create posts, this will be
      action. So now, instead of our post form component, the api is still going
      to be the same. We just say action, and we get the appropriate function
    */
    action: (post) => dispatch(createPost(post))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
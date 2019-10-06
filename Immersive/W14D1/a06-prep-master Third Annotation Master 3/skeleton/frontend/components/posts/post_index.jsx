import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';


class PostIndex extends React.Component {
  // We do not need a constructor, we are not doing anything within the 
  // internal state

  componentDidMount() {
  // https://reactjs.org/docs/react-component.html#componentdidmount
    this.props.fetchPosts();
  }


  render () {
    let posts = this.props.posts.map( post => {

      return (
        <PostIndexItem
          key={`${ post.title }`}
          post={ post }
        />
      );
    })

    return (
      <div>
        <ul>
        {/* make sure to return your mapped callback function result */}
          { posts }
        </ul>

        {/*
          PostIndex is rendering the form at the bottom. If we were not 
          rendering the containers, the components would not get access to 
          props 
        */}
        <CreatePostFormContainer/>
      </div>
    );
  }
}


export default PostIndex;

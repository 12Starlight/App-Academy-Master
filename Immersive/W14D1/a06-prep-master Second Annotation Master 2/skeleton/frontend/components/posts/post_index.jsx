import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';
import { combineReducers } from 'redux';

class PostIndex extends React.Component {
  // We do not need a constructor, we are not doing anything witht the internal
  // state 
  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => {
            // make sure to return your mapped callback function result
            return <PostIndexItem post={post} deletePost={ this.props.deletePost } />;
          })}
        </ul>
        {/*
          just saying that PostIndex is rendering the form at the bottom. If we
          were not rendering the containers, the components would not get 
          access to props
        */}
        <CreatePostFormContainer />
      </div>
    );
  }
}

export default PostIndex;
 
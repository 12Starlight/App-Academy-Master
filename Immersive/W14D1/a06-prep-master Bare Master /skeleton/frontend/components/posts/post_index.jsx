import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
  // componentDidMount // index // fetchPosts();
  componentDidMount() {
    this.props.fetchPosts();
  }


  // render
  render() {
    let posts = this.props.posts.map(post => {

      // PostIndexItem
      return (
        <PostIndexItem
          key={`${post.title}`}
          post={post}
        />
      );
    })

    // ul, CreatePostFormContainer
    return (
      <div>
        <ul>
          { posts }
        </ul>

        <CreatePostFormContainer />
      </div>
    );
  }
}


export default PostIndex;

import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
 
  componentDidMount(){
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
          { posts }
        </ul>

        <CreatePostFormContainer/>
      </div>
    );
  }
}

export default PostIndex;

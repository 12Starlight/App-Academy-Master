import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {

  componentDidMount() {
    // fetches our post, if we do not have one already
    let postId = this.props.match.params.postId 
      this.props.fetchPost(postId)
  }

  render () {
    return (
      <div>
        {/* 
          so our specs want us to show the post information and have a link to 
          the post index, look in __tests__ post_show-test
        */}
        <h2>{ this.props.post.title}</h2>
        <div>{ this.props.post.body }</div>
        <Link to="/">Post Index</Link> {/* takes us to the post index */}
      </div>
    );
  }
}
  
export default PostShow;

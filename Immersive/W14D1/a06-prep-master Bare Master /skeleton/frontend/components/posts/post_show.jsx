import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  // componentDidMount // show // postId // fetchPost(postId)
  componentDidMount() {
    let postId = this.props.match.params.postId
    this.props.fetchPost(postId)
  }


  // HDL to=
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <div>{this.props.post.body}</div>
        <Link to="/">Post Index</Link> 
      </div>
    );
  }
}


export default PostShow;

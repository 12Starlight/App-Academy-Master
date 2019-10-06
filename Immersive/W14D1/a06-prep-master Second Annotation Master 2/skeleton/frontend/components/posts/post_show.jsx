import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }
  
  render () {
    return (
      <div>
        { this.props.post.title }
        { this.props.post.body } 
        <Link to="/">Index</Link>       
      </div>
    );
  }
} 

export default PostShow;

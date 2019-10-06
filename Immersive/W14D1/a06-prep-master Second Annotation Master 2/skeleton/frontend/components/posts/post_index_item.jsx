import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => (
  <div>
    {/* loop at app.jsx to figure out routes */}
    <Link to={`/posts/${props.post.id}`} >{ props.post.title }</Link>
    <Link to={`/posts/${props.post.id}/edit`} >Edit</Link>
    {/*
      making a fat arrow allows us to control how deletePost gets invoked,  
      onClick is expecting a callback
    */}
    <button onClick={() => props.deletePost( props.post.id ) }>Delete</button>
  </div>
);

export default PostIndexItem;
     
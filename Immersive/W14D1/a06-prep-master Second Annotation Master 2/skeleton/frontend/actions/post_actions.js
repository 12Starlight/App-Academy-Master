import * as PostApiUtil from '../util/post_api_util';
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST = "RECEIVE_POST";


/* 
  Build Thunk Actions
  
  They are action creators, so they are functions and should expect the 
  returned function to receive dispatch as an argument. That is just how 
  thunks work, we know that when we dipsatch a function it will get caught by 
  the middleware and be envoked, then dipatch will be passed in as an argument

  Thunk functions are functions that return functions and the inner function 
  expects dispatch
*/ 
export const fetchPosts = () => {
  return dispatch => {
    return PostApiUtil.fetchPosts().then( posts => {
      return dispatch({type: RECEIVE_ALL_POSTS, posts: posts})
    });
  };
};

export const fetchPost = (id) => {
  return dispatch => {
    return PostApiUtil.fetchPost(id).then(post => {
      return dispatch({ type: RECEIVE_POST, post: post })
    });
  };
};

export const createPost = (postSend) => {
  return dispatch => {
    return PostApiUtil.createPost(postSend).then(postReceive => {
      return dispatch({ type: RECEIVE_POST, post: postReceive })
    });
  };
};

export const updatePost = (postSend) => {
  return dispatch => {
    return PostApiUtil.updatePost(postSend).then(postReceive => {
      return dispatch({ type: RECEIVE_POST, post: postReceive })
    });
  };
};

export const deletePost = (id) => {
  return dispatch => {
    return PostApiUtil.deletePost(id).then(() => {
      return dispatch({ type: REMOVE_POST, postId: id })
    });
  };
};
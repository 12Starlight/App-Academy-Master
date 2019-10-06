import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";


// Build regular actions

// receivePosts(posts) 
const receivePosts = (posts) => ({
  posts: posts,
  type: RECEIVE_ALL_POSTS
});

// receivePost(post)
const receivePost =  (post) => ({
  post: post,
  type: RECEIVE_POST
});

// removePost(post)
const removePost = (post) => ({
  postId: post.id,
  type: REMOVE_POST
});


/* 
  Build Thunk Actions

  They are action creators, so they are functionsj and should expect the 
  returned funciton to receive dispatch as an argument. That is just how thunks
  work, we know that when we dispatch a function it will get caught by the
  middleware and be envoked, then dispatch will be passed in as an argument

  Thunk functions are functions that return functions and the inner function
  expects dispatch
*/

// fetchPosts() 
export const fetchPosts = () => (dispatch) => (
  PostApiUtil.fetchPosts().then( posts => dispatch(receivePosts(posts)))
) 
/*
  export const fetchPosts = () => {
    return dispatch => {
      return PostApiUtil.fetchPosts().then( posts => {
        return dispatch({type: RECEIVE_ALL_POSTS, posts: posts})
      });
    };
  };
*/

// fetchPost(id)
export const fetchPost = (id) => (dispatch) => (
  PostApiUtil.fetchPost(id).then( post => dispatch(receivePost(post)))
)
/*
  export const fetchPost = (id) => {
    return dispatch => {
      return PostApiUtil.fetchPost(id).then( post => {
        return dispatch({type: RECEIVE_POST, post: post})
      });
    };
  };
*/

// createPost(postSend)
export const createPost = (postSend) => (dispatch) => (
  PostApiUtil.createPost(postSend).then( postReceive => dispatch(receivePost(postReceive)))
)
/*
  export const createPost = (postSend) => {
    return dispatch => {
      return PostApiUtil.createPost(postSend).then( postReceive => {
        return dispatch({type: RECEIVE_POST, post: postReceive })
      });
    };
  };
*/

// updatePost(postSend)
export const updatePost = (postSend) => (dispatch) => (
  PostApiUtil.updatePost(postSend).then( postReceive => dispatch(receivePost(postReceive)))
)
/*
  export const updatePost = (postSend) => {
    return dispatch => {
      return PostApiUtil.update(postSend).then( postReceive => {
        return dispatch({type: RECEIVE_Post, post: postReceive })
      });
    };
  };
*/

// deletePost(id)
export const deletePost = (id) => (dispatch) => (
  PostApiUtil.deletePost(id).then( post => dispatch(removePost(post)))
)
/*
  export const deletePost = (id) => {
    return dispatch => {
      return PostApiUtil.deletePost(id).then(() => {
        return dispatch({type: REMOVE_POST, postId: id })
      });
    };
  };
*/
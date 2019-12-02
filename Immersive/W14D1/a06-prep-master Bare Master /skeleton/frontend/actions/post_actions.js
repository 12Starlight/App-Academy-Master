import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";


// Regular Actions
const receivePosts = (posts) => ({
  posts: posts,
  type: RECEIVE_ALL_POSTS
});

const receivePost = (post) => ({
  post: post,
  type: RECEIVE_POST
});

const removePost = (post) => ({
  postId: post.id,
  type: REMOVE_POST
});


// Thunk Actions
export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = (id) => dispatch => (
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = (postSend) => dispatch => (
  PostApiUtil.createPost(postSend).then(postReceive => dispatch(receivePost(postReceive)))
);

export const updatePost = (postSend) => dispatch => (
  PostApiUtil.updatePost(postSend).then(postReceive => dispatch(receivePost(postReceive)))
);

export const deletePost = (id) => dispatch => (
  PostApiUtil.deletePost(id).then(post => dispatch(removePost(post)))
);
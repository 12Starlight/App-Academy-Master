// Api Util Functions


// fetchPosts()
export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    // should be /api/posts // otherwise it attaches itself to a local url
    url: `api/posts`
  });
};

// fetchPost(id)
export const fetchPost = id => {
  return $.ajax({
    method: "GET",
    url: `api/posts/${ id }`
  });
};

// createPost(post)
// data is params, go look at your post controller and look at params
export const createPost = (post) => {
  return $.ajax({
    method: "POST",
    url: `api/posts`,
    data: { post } // shortcut for { post: post }
  });
};

// updatePost(post)
export const updatePost = (post) => {
  return $.ajax({
    method: "PATCH",
    url: `api/posts/${ post.id }`,
    data: { post }
  });
};

// deletePost(id)
export const deletePost = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/posts/${ id }`
  });
};

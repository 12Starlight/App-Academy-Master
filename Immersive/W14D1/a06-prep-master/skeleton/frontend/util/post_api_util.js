export const fetchPosts = () => {
  return (
    $.ajax({
      method: "GET",
      url: "api/posts"
    })
  )
}

export const fetchPost = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/posts/${ id }`
    })
  )
}

export const createPost = (post) => (
  $.ajax({
    method: "POST",
    url: "api/posts",
    data: { post }
  })
)

export const updatePost = (post) => (
  $.ajax({
    method: "PATCH",
    url: `api/posts/${ post.id }`,
    data: { post } 
  })
)

export const deletePost = (id) => (
  $.ajax({
    method: "delete",
    url: `api/posts/${ id }`
  })
)


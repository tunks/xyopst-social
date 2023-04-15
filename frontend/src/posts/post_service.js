import axios from "axios";
const API_URL = "http://localhost:18080/api/v1/posts/";

class PostService {

  getUserPosts(userId){
    console.log('Get posts - userId: '+userId);
    return axios
      .get(API_URL, {
        params: {
          userId: userId
        }
      })
      .then(response => {
        console.log("Get post response..")
        console.log(response);
        return response.data;
      });
  }

  savePost(post) {
    console.log("Save post")
    console.log(post)
    return axios
      .post(API_URL, {
        title: post.title,
        content: post.content,
        userId: post.userId
      })
      .then(response => {
        console.log("Save post response..")
        console.log(response);
        return response.data;
      });
  }
  updatePost() {
    console.log('Update post');
  }

  deletePost() {
    console.log('Delete post');
  }

  savePostComment(comment) {
    console.log("Save comment")
    console.log(comment)
    return axios
      .post(API_URL+'comments', {
        postId: comment.postId,
        userId: comment.userId,
        content: comment.content
      })
      .then(response => {
        console.log("Save comment response..")
        console.log(response);
        return response.data;
      });
  }

  getPostComments(postId) {
    console.log("Get comments")
    console.log(postId)
    return axios
      .get(API_URL+postId+'/comments')
      .then(response => {
        console.log("Get post comments.")
        console.log(response);
        return response.data;
      });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PostService()
import React, { Component, useState} from "react";
import AuthService from '../auth/auth_service'
import PostService from '../posts/post_service'
import PostCommentItem from './post-comment-item'

class PostComment extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.onCommentTextChange = this.onCommentTextChange.bind(this);
    this.state = {
      newContent: "",
      postId: this.props.postId,
      comments: []
    };
    console.log("comment : this.props.postId : "+this.props.postId);
    console.log(this.props);
  }
  
  handleSave(e) {
    e.preventDefault();
    var currentUser = AuthService.getCurrentUser();
    var comment = {postId: this.state.postId, 
                   userId: currentUser.id,
                   content: this.state.newContent };
    console.log("Save comment: postid "+this.state.postId)
    var comments = this.state.comments;

    PostService.savePostComment(comment).then(response=>{
        console.log("Post comment saved ==> response data");
        console.log(response);
        var newCommentData = this.getNewCommentData(response.data);
        //comments.push(newCommentData)
        console.log("Post comment saved ==> response new data");
        console.log(newCommentData)

        this.setState({
            newContent: "",
            comments: comments.concat(newCommentData),
            postId: this.state.postId
        })

        console.log("After state comment updates");
        console.log(this.state.comments);
    })
 
  }

getNewCommentData(data){
    var currentUser = AuthService.getCurrentUser();
    console.log(currentUser);
    var newComment = {id: data._id, 
                        content: data.content, 
                        createdAt: data.createdAt,
                        postId: this.state.postId,
                        userId: currentUser.id};
     
        var userprofile = {id: currentUser.id, 
                           firstname: "dfs", 
                           lastname: "dafs"};

        return {_id: data._id, userprofile: userprofile,comment: newComment};
  }


  onCommentTextChange(e){
    this.setState({
        newContent: e.target.value,
    });
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments(){
    PostService.getPostComments(this.state.postId)
                .then(response=>{
                    console.log("#####fetchComments() "+response);
                    console.log(response)
                    this.setState({
                        newContent: "",
                        comments: response.comments
                    });
                });
  }
  render(){
    return (<div class="new-comment" style={{display: 'block'}}>
                    <form method="post" onSubmit={this.handleSave}>
                        <input type="text" placeholder="write comment" value={this.state.newContent} onChange={this.onCommentTextChange}/>
                        <button type="submit"><i class="icofont-paper-plane"></i></button>
                    </form>
                    <div class="comments-area">
                         <CommentList comments={this.state.comments} />
                    </div>
                  
            </div>
    )
  }
}

// class CommentList extends Component{    
//     fsf ;
//     render = () => {
//         const noCommentMsg = "No comments";
//         console.log(this.props)
//             const list = [];
//             this.props.comments.forEach((comment)=>{
//                 list.push(<PostCommentItem data={comment}/>);
//             });
            
//             if(this.props.comments && this.props.comments.length >0 )
//               return <ul>{list}</ul>
//             else
//               return <div class="no-comment">{noCommentMsg}</div>
//       }
//   }

function CommentList({comments}){  
    //    var list = [];  
        const noCommentMsg = "No comments";
        console.log("###### CommentList() "+comments.length)
        console.log(comments)
        var list = comments.map(item => {
                     return <li key={item.id}><PostCommentItem data={item}/></li>;
             });
        return( <ul>{list}</ul>);
  }

export default PostComment;
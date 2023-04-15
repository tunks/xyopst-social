import React, { Component } from "react";
import AuthService from '../auth/auth_service'
import PostService from '../posts/post_service'

class PostCommentItem extends Component {
  constructor(props) {
    super(props);
    console.log("#####comment : this.props.items");
    console.log(this.props);
    this.state = {
      comment: this.props.data.comment,
      user: this.props.data.userprofile
    };
  }
  
  getUserFullname(){
     return this.state.user.firstname + " " + this.state.user.lastname;
  }

  getUserProfileLink(){
    return "/users/"+this.state.user.id;
  }

  render(){
    return (<div>
                  <div class="commenter">
                      <h5>
                          <a class="commenter-profile-link" title="" href={this.getUserProfileLink()}> 
                               {this.getUserFullname()}
                         </a>
                        </h5>
                      <span>{this.state.comment.createdAt}</span>
                      <p>{this.state.comment.content}</p>
                  </div>
              </div>
     )
  }
}

export default PostCommentItem;
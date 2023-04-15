import React, { Component } from "react";
import AuthService from '../auth/auth_service';
import UserPostControl from "./user-post-control";
import UserPostStats from "./user-post-stats";
import PostComment from "./post-comment";
import UserImage from '../assest/images/resources/user_avatar1.png'

class UserPost extends Component {
  constructor(props) {
    super(props);
    const data = this.props.data
    this.state = {
        post: data.post,
        userprofile: data.userprofile
    };
  }

  componentDidMount() {
  }


  getPostLink(){
    return "/post/"+this.state.post.id;
  }

  getFullName(){
    return this.state.userprofile.firstname +" "+this.state.userprofile.lastname;
  }

  getUserLink(){
    return "/profile/"+this.state.userprofile.id;
  }
  render(){
    return (
        <div class="main-wraper">
            <div class="user-post">
               <div class="friend-info">
                    <figure>
                        <em>
                             <svg  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path>
                            </svg> 
                        </em>
                        <img alt="" src={UserImage} /> 
                    </figure>
                    <div class="friend-name">
                        <div class="more">
                                <div class="more-post-optns">
                                    <i class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
                                    <ul>
                                        <li>
                                            <i class="icofont-pen-alt-1"></i>Edit Post
                                            <span>Edit This Post within a Hour</span>
                                        </li>
                                        <li>
                                            <i class="icofont-ban"></i>Hide Post
                                            <span>Hide This Post</span>
                                        </li>
                                        <li>
                                            <i class="icofont-ui-delete"></i>Delete Post
                                            <span>If inappropriate Post By Mistake</span>
                                        </li>
                                        <li>
                                            <i class="icofont-flag"></i>Report
                                            <span>Inappropriate content</span>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <ins>
                            <a title="verified" href={this.getUserLink()}>{this.getFullName()} </a> 
                            {/* <span class="v-divider"></span> */}
                            <i class="icofont-dotted-right"></i>
                             <a href={this.getPostLink()} class="post-title">
                                  {this.state.post.title}
                             </a>
                             </ins>
                        <span><i class="icofont-globe"></i> published: {this.state.post.createdAt}</span>
                    </div>

                    <div class="post-meta">
                            {/* <a href="post-detail.html" class="post-title">
                                {this.state.post.title}
                                </a> */}
                            <div>
                               <div></div>
                               <div class="post-content"> 
                                  <p>{this.state.post.content}</p>
                                </div>
                            </div>
                            
                            {/* <UserPostControl /> */}
                            <UserPostStats />
                            <PostComment postId={this.state.post.id}/>
                    </div>

               </div>
            </div>
		</div>
    )
  }
}

export default UserPost
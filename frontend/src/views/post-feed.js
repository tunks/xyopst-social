import React, { Component } from "react";

import AuthService from '../auth/auth_service';
import PostService from '../posts/post_service';
import UserPost from "./user-post";
import messageService from "../message/message-service"

class PostFeed extends Component {
  constructor(props) {
    super(props);
    console.log("PostFeed....init()");
    console.log(props);
    this.state = {
        feedData: []
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    console.log("Home current user: "+currentUser);
    this.fetchFeedPosts();
    //message subscription
    this.subscription = messageService.getMessage().subscribe(message => {
        console.log("Message received");
        console.log(message);
        const data = message.data;
        if (data && data.reload) {
            console.log("Message data received reload post");
            // add message to local state if not empty
            //this.setState({ messages: [...this.state.messages, message] });
            this.fetchFeedPosts();
        } else {
            // clear messages when empty message received
            //this.setState({ messages: [] });
        }
    });
  }
  
  fetchFeedPosts(){
    const currentUser = AuthService.getCurrentUser();
    PostService.getUserPosts(currentUser.id)
    .then(response =>{
        console.log("Get all posts");
        console.log(response);
        this.setState({ feedData: response.data});
    })
  }
  render(){
    return (<div>
                {this.state.feedData.map((item,index) => (
                    <UserPost key={item._id} data={item}/>
                ))}
            </div>)
  }
}

export default PostFeed
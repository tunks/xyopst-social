import React, { Component } from "react";
import AuthService from '../auth/auth_service'

class UserPostControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return ( <div class="we-video-info">
                <ul>
                    <li>
                        <span title="views" class="views">
                            <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
                            <ins>1.2k</ins>
                        </span>
                    </li>
                    <li>
                        <span title="Comments" class="Recommend">
                            <i>
            <svg class="feather feather-message-square" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></i>
                            <ins>54</ins>
                        </span>
                    </li>
                    <li>
                        <span title="follow" class="Follow">
                            <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
                        <ins>5k</ins>	
                        </span>
                    </li>
                    <li>
                        <span class="share-pst" title="Share">
                            <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
                        <ins>205</ins>
                        </span>	
                    </li>
                </ul>
                <a href="post-detail.html" title="" class="reply">Reply <i class="icofont-reply"></i></a>
            </div>
    )
  }
}

export default UserPostControl
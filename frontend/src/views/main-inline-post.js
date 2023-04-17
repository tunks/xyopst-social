import React, { Component } from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PostPopup from "./post-popup";
import PhotoImg from '../assest/images/image.png'
import EventImg from '../assest/images/activity.png'



class MainInlinePost extends Component {
    constructor(props) {
      super(props);
      this.handleClickOpen = this.handleClickOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.state = {
        open: false,
      };
    }

    handleClickOpen = (e) => {
        e.preventDefault();
        this.setState({open: true})
        console.log('The link was clicked.');
    }

    handleClose(){
        this.setState({open: false}) 
    }

    render(){
        return <div class="inline-post">
                    <div class="input-group mb-4 shadow-sm rounded-4 overflow-hidden py-2 bg-white" data-bs-toggle="modal" data-bs-target="#postModal">
                        <span class="input-group-text material-icons border-0 bg-white text-primary">
                           <AccountCircleIcon />
                        </span>
                        
                        <input type="text" class="form-control border-0 fw-light ps-1" placeholder="What's on your mind."/>
                        <a href="/" 
                           class="text-decoration-none input-group-text bg-white border-0 material-icons text-primary"
                           onClick={this.handleClickOpen}>
                            <AddCircleIcon />
                        </a>
                        <ul class="upload-media">
                            <li>
                                <a href="/" title="">
                                    <i><img src={PhotoImg} alt=""/></i>
                                    <span>Photo</span>
                                </a>	
                            </li>
                            <li>
                                <a href="/" title="">
                                    {/* <i><img src="images/image.png" alt=""/>
                                    <i class="icofont-video"></i>
                                    </i> */}
                                    <i class="icofont-video"></i>
                                    <span>Video</span>
                                </a>	
                            </li>
                            <li>
                                <a href="/" title="">
                                    <i><img src={EventImg} alt=""/></i>
                                    <span>Event</span>
                                </a>	
                            </li>
                        </ul>
                        <PostPopup open={this.state.open} handleClose={this.handleClose}/>
                    </div>
           </div>
    }
}

export default MainInlinePost;


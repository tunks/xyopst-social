
import React, { Component } from "react";
import AuthService from '../auth/auth_service' 
import ProfileImg from '../assest/images/resources/et-profile.jpg'

class MiniUserProfile extends Component {
    constructor(props) {
        super(props);
        const user = AuthService.getCurrentUser();
        this.state = {
            currentUser: user,
          };
      }
    
    componentDidMount() {
        const user = AuthService.getCurrentUser();
        console.log("Header current user: ");
        console.log(user);
    }
    render(){
     return <div class="widget img-profile">
                <div></div>
                <h4 class="widget-title min-profile-title">
                    <a href="/profile/">
                    {this.state.currentUser.name} Ebrima Tunkara
                    </a>
                    </h4>
                <div data-progress="tip" class="progress__outer" data-value="0.67">
                    {/* <div class="progress__inner">82%</div> */}
                    <div>
                        <img alt="" src={ProfileImg} class="rounded-circle"/>
                    </div>
                </div>
                <div>
					<small>Web Developer at Webestica</small>
					<p class="mt-3">I'd love to change the world, but they won’t give me the source code.</p>
                </div>
                <ul class="prof-complete">
                    <li><i class="icofont-plus-square"></i> <a href="#" title="">Upload Your Picture</a><em>10%</em></li>
                    <li><i class="icofont-plus-square"></i> <a href="#" title="">Your University?</a><em>20%</em></li>
                    <li><i class="icofont-plus-square"></i> <a href="#" title="">Add your favorite things</a><em>20%</em></li>
                </ul>

                <div class="profile-stats hstack gap-2 gap-xl-3 justify-content-center">
                    <div class="profile-stats-item">
                        <h6 class="mb-0">256</h6>
                        <small>Post</small>
                    </div>
                    <div class="vr"></div>
                    <div class="profile-stats-item">
                        <h6 class="mb-0">2.5K</h6>
                        <small>Followers</small>
                    </div>
                    <div class="vr"></div>
                    <div class="profile-stats-item">
                        <h6 class="mb-0">365</h6>
                        <small>Following</small>
                    </div>
				</div>
            </div> 
    }
}

export default MiniUserProfile;
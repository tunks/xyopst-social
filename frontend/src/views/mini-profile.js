
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
        console.log("Header current user: "+user);
    }
    render(){
     return <div class="widget img-profile">
                <h4 class="widget-title">{this.state.currentUser.name}</h4>
                <div data-progress="tip" class="progress__outer" data-value="0.67">
                    {/* <div class="progress__inner">82%</div> */}
                    <div>
                        <img alt="" src={ProfileImg} class="rounded-circle"/>
                    </div>
                </div>
                <ul class="prof-complete">
                    <li><i class="icofont-plus-square"></i> <a href="#" title="">Upload Your Picture</a><em>10%</em></li>
                    <li><i class="icofont-plus-square"></i> <a href="#" title="">Your University?</a><em>20%</em></li>
                    <li><i class="icofont-plus-square"></i> <a href="#" title="">Add your favorite things</a><em>20%</em></li>
                </ul>
            </div> 
    }
}

export default MiniUserProfile;
import React, { Component } from "react";
import Search  from "./search";
import AuthService from '../auth/auth_service' 
import LogoImg from  '../assest/images/logo.png';

class Header extends Component{
    constructor(props) {
        super(props);
        this.handleClickLogout = this.handleClickLogout.bind(this);
        const user = AuthService.getCurrentUser();
        this.state = {
            currentUser: user,
            isLoggedIn: true
          };
      }
    
    componentDidMount() {
        const user = AuthService.getCurrentUser();
        console.log("Header current user: "+user);
        // this.setState({
        //     currentUser: user,
        //     isLoggedIn: true,
        // });
    }

    handleClickLogout = (e) => {
        e.preventDefault();
        console.log('The link was clicked. User logout');
        AuthService.logout()
        window.location.reload()
   }    
  render(){
    return <header class="">
                <div class="topbar stick">
                    <div class="logo">
                        <img src={LogoImg} alt=""/> 
                        <span>Xyopst Social</span>
                    </div>
                    <Search />

                    <ul class="web-elements">
                        <li>
                            <a href="index.html" title="Home" data-toggle="tooltip">
                                <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></i>
                            </a>
                        </li>
                        <li>
                            <a class="mesg-notif" href="/" title="Messages" data-toggle="tooltip">
                                <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></i>
                            </a>
                            <span></span>
                        </li>
                        <li>
                            <a class="mesg-notif" href="/" title="Notifications" data-toggle="tooltip">
                                <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></i>
                            </a>
                            <span></span>
                        </li>
                        <li>
                            <a class="create" href="/" title="Add New" data-toggle="tooltip">
                                <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></i>
                            </a>
                        </li>
                        <li>
                            <div>
                             	

                                <a class="create" href="/" title="Add New" data-toggle="tooltip">
                                    <i>
                                       {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                       class="icofont-user-alt-3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                     */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"/></svg>
                                    </i>
                                </a>
                            </div>
                            <ul class="dropdown">
                                <li><a href="profile.html" title=""><i class="icofont-user-alt-3"></i> Your Profile</a></li>
                                <li class="logout"><a href="" role="button" onClick={this.handleClickLogout}><i class="icofont-power"></i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
    </header>;
  }
}

export default Header;
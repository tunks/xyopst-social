import React, { Component } from "react";

import './main.css';
import AuthService from '../auth/auth_service'
import Header  from "./Header";
import MainInlinePost from "./main-inline-post";
import MiniUserProfile from "./mini-profile"
import PostFeed from "./post-feed";
import Connections from "./connections";
import Following from './following';
import Groups from '../group/groups';
import GroupList from '../group/group-list';
import PostDetail from '../posts/post-detail'
import Advertisment from "../ads/advertisment";
import Events from "../events/events";
import ClockImg from '../assest/images/clock.png';

class Main extends Component {
  constructor(props) {
    super(props);
   // this.logOut = this.logOut.bind(this);
    this.state = {
        contextPath: window.location.pathname
    };
  }
  
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log("Home current user: "+user);
    console.log("Main "+this.state.contextPath)
  }
  
  getContextComponent(contextPath){
    console.log("switch contextPath: "+contextPath);
     const paths = contextPath.split("/")
     const currentPath = (paths.length >0)? paths[1]: "";
     console.log("currentPath: "+currentPath);
     switch(currentPath){
       case 'groups':
          return <GroupList />;
       case 'post':
          return <PostDetail />;
       default:
          return <HomeComponent />;
     }
  }
  render(){
    return (<div class="theme-layout">
                <Header />
                <section>
                    <div class="gap">
                        <div class="container">
                            {this.getContextComponent(this.state.contextPath)}
                        </div>
                    </div>
                </section>
                <figure class="bottom-mockup"><img src="images/footer.png" alt=""/></figure>
                <div class="bottombar">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <span class="">&copy; copyright All rights reserved by Xyopst Social 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

  }
}


class HomeComponent extends Component{
    render(){
        return(<div class="row">
                <div class="col-lg-12">
                    <div id="page-contents" class="row merged20">
                        <div class="col-lg-3">
                            <aside class="sidebar static left">    
                                <MiniUserProfile  />   
                                <Connections />
                                <Following />

                            </aside>
                        </div>
                        <div class="col-lg-6">
                        <MainInlinePost/>
                        <PostFeed/> 
                        </div>
                        <div class="col-lg-3">
                            <aside class="sidebar static right">
                                <Groups />
                                <Advertisment />
                                <Events />
                            </aside>

                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default Main;

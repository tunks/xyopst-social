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
import AdImg from  '../assest/images/resources/ad-widget2.gif'
import ClockImg from '../assest/images/clock.png';

class Main extends Component {
  constructor(props) {
    super(props);
   // this.logOut = this.logOut.bind(this);
    this.state = {};
  }
  
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log("Home current user: "+user);
  }
  
  render(){
    return (<div class="theme-layout">
                <Header />
                <section>
                    <div class="gap">
                        <div class="container">
                            <div class="row">
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
                                                <div class="widget">
                                                    <div class="advertisment-box">
                                                        <h4 class=""><i class="icofont-info-circle"></i> advertisment</h4>
                                                        <figure>
                                                            <a title="Advertisment" href="/adverts"><img alt="" src={AdImg}/></a>
                                                        </figure>
                                                    </div>
                                                </div>

                                                <div class="widget">
                                                    <h4 class="widget-title">Explor Events <a title="" href="/" class="see-all">See All</a></h4>
                                                    <div class="rec-events bg-purple">
                                                        <i class="icofont-microphone"></i>
                                                        <h6><a href="/" title="">BZ University good night event in columbia</a></h6>
                                                        <img src={ClockImg} alt="" />
                                                    </div>
                                                    <div class="rec-events bg-blue">
                                                        <i class="icofont-microphone"></i>
                                                        <h6><a href="/" title="">The 3rd International Conference 2020</a></h6>
                                                        <img src={ClockImg} alt="" />
                                                    </div>
                                                </div>
                                            </aside>

                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default Main;

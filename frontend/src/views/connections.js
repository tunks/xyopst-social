
import React, { Component } from "react";
import Search  from "./search";
import AuthService from '../auth/auth_service' 
import FriendAvatar from '../assest/images/resources/friend-avatar.jpg';

class Connections extends Component{
    render(){
        return <div class="widget">
                    <h4 class="widget-title">Connections</h4>
                    <ul class="followers" >
                        <li>
                            <figure><img alt="" src={FriendAvatar} /></figure>
                            <div class="friend-meta">
                                <h4>
                                    <a title="" href="time-line.html">Kelly Bill</a>
                                    <span>Dept colleague</span>
                                </h4>
                                <a class="underline" title="" href="#">Follow</a>
                            </div>
                        </li>
                        <li>
                            <figure><img alt="" src={FriendAvatar} /></figure>
                            <div class="friend-meta">
                                <h4>
                                    <a title="" href="time-line.html">Issabel</a>
                                    <span>Dept colleague</span>
                                </h4>
                                <a class="underline" title="" href="#">Follow</a>
                            </div>
                        </li>
                        <li>
                            <figure><img alt="" src={FriendAvatar} /></figure>
                            <div class="friend-meta">
                                <h4>
                                    <a title="" href="time-line.html">Andrew</a>
                                    <span>Dept colleague</span>
                                </h4>
                                <a class="underline" title="" href="#">Follow</a>
                            </div>
                        </li>
                        <li>
                            <figure><img alt="" src={FriendAvatar} /></figure>
                            <div class="friend-meta">
                                <h4>
                                    <a title="" href="time-line.html">Sophia</a>
                                    <span>Dept colleague</span>
                                </h4>
                                <a class="underline" title="" href="#">Follow</a>
                            </div>
                        </li>
                        <li>
                            <figure><img alt="" src={FriendAvatar} /></figure>
                            <div class="friend-meta">
                                <h4>
                                    <a title="" href="time-line.html">Allen</a>
                                    <span>Dept colleague</span>
                                </h4>
                                <a class="underline" title="" href="#">Follow</a>
                            </div>
                        </li>
                    </ul>	
            </div>
    }
}


export default Connections;
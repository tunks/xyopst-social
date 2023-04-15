
import React, { Component } from "react";
// import AuthService from '../auth/auth_service' 
// import FriendAvatar from '../assest/images/resources/friend-avatar.jpg';

class Groups extends Component{
    render(){
        return 	<div class="widget">
                        <div>
                            {/* <div class="add-group-link"><i class="icofont-plus-square"></i> <a href="/group" title="">Create a group</a></div> */}
                            <h6 class="widget-title">
                               <i class="">
											<svg class="feather feather-users" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle r="4" cy="7" cx="9"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
										</i>
                                 {/* <a href="/group" class="groups-title">Community Groups</a> */}
                                 Community Groups
                                  <a title="" href="/" class="see-all">See All</a>
                                </h6>
                        </div>

                        <ul class="ak-groups">
                            <li>
                                <figure><img src="images/resources/your-group1.jpg" alt=""/></figure>
                                <div class="your-grp">
                                    <h5><a href="group-detail.html" title="">Indian Students in Toronto</a></h5>
                                    <a href="#" title=""><i class="icofont-bell-alt"></i>Notifilactions <span>5</span></a>
                                    <a href="group-feed.html" title="" class="promote">view feed</a>
                                </div>
                            </li>
                            <li>
                                <figure><img src="images/resources/your-group2.jpg" alt="" /></figure>
                                <div class="your-grp">
                                    <h5><a href="group-detail.html" title="">University of Toronto Internationl Students</a></h5>
                                    <a href="#" title=""><i class="icofont-bell-alt"></i>Notifilactions <span>2</span></a>
                                    <a href="group-feed.html" title="" class="promote">view feed</a>
                                </div>
                            </li>

                            <li>
                                <figure><img src="images/resources/your-group2.jpg" alt="" /></figure>
                                <div class="your-grp">
                                    <h5><a href="group-detail.html" title="">African students in NYC, Bronx</a></h5>
                                    <a href="#" title=""><i class="icofont-bell-alt"></i>Notifilactions <span>0</span></a>
                                    <a href="group-feed.html" title="" class="promote">view feed</a>
                                </div>
                            </li>
                        </ul>
               </div>
    }
}


export default Groups;
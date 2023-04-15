import React, { Component } from "react";

class Search extends Component{
   render(){
    return <div class="searches">
                <form method="post">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><i class="icofont-search"></i></button>
                    <span class="cancel-search"><i class="icofont-close"></i></span>
                    <div class="recent-search">
                        <h4 class="recent-searches">Your's Recent Search</h4>
                        <ul class="so-history">
                            <li>
                                <div class="searched-user">
                                    <figure><img src="images/resources/user1.jpg" alt=""/></figure>
                                    <span>Danial Carabal</span>
                                </div>
                                <span class="trash"><i class="icofont-close-circled"></i></span>
                            </li>
                            <li>
                                <div class="searched-user">
                                    <figure><img src="images/resources/user2.jpg" alt=""/></figure>
                                    <span>Maria K</span>
                                </div>
                                <span class="trash"><i class="icofont-close-circled"></i></span>
                            </li>
                            <li>
                                <div class="searched-user">
                                    <figure><img src="images/resources/user3.jpg" alt=""/></figure>
                                    <span>Fawad Khan</span>
                                </div>
                                <span class="trash"><i class="icofont-close-circled"></i></span>
                            </li>
                            <li>
                                <div class="searched-user">
                                    <figure><img src="images/resources/user4.jpg" alt=""/></figure>
                                    <span>Danial Sandos</span>
                                </div>
                                <span class="trash"><i class="icofont-close-circled"></i></span>
                            </li>
                            <li>
                                <div class="searched-user">
                                    <figure><img src="images/resources/user5.jpg" alt=""/></figure>
                                    <span>Jack Carter</span>
                                </div>
                                <span class="trash"><i class="icofont-close-circled"></i></span>
                            </li>
                        </ul>
                    </div>
                </form>
        </div>
   }
 }

 export default Search;
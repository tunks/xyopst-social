
import React, { Component } from "react";
import Advertisment from "../ads/advertisment";
import Events from "../events/events";
import GroupService from "./group-service";
import AuthService from '../auth/auth_service';
import GroupImg from '../assest/images/resources/group1.jpg';

class GroupList extends Component{
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
          groups: [],
        };
    }

    componentDidMount() {
        this.fetchGroups();
    }
      
    fetchGroups(){
        console.log("fetchGroups()");
        const currentUser = AuthService.getCurrentUser();
        GroupService.getAllGroups(currentUser.id)
        .then(response =>{
            console.log("Get all groups");
            console.log(response);
            this.setState({ groups:  response.data});
        })
    }

    render(){
        return (<div class="row">
					<div class="col-lg-12">
						<div id="page-contents" class="row merged20">
							<div class="col-lg-9">
								<div class="main-wraper">
									<h4 class="main-title"><i class=""><svg class="feather feather-users" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle r="4" cy="7" cx="9"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></i> Groups</h4>
									<div class="row col-xs-6">
										{this.state.groups.map((group)=>{
                                           return <GroupItem key={group._id} group={group}/>
                                        })}
									</div>
									<div class="col-lg-12">
										<div class="load mb-4">
											<ul class="pagination">
												<li><a title="" href="#"><i class="icofont-arrow-left"></i></a></li>
												<li><a title="" href="#" class="active">1</a></li>
												<li><a title="" href="#">2</a></li>
												<li><a title="" href="#">3</a></li>
												<li><a title="" href="#">4</a></li>
												<li><a title="" href="#">5</a></li>
												<li>....</li>
												<li><a title="" href="#">10</a></li>
												<li><a title="" href="#"><i class="icofont-arrow-right"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3">
								<aside class="sidebar static right">
									<div class="widget">
										<h4 class="widget-title">Ask Research Question?</h4>
										<div class="ask-question">
											<i class="icofont-question-circle"></i>
											<h6>Ask questions in Q&A to get help from experts in your field.</h6>
											<a class="ask-qst" href="#" title="">Ask a question</a>
										</div>
									</div>
                                    <Advertisment />
                                     <Events />
	
								</aside>
							</div>
						</div>
					</div>
                </div>);
    }
}


class GroupItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
          group: this.props.group
        };
        console.log(this.state.group)
    }

    render(){
        return (<div class="col-lg-3 col-md-4 col-sm-4">
                    <div class="group-box">
                        <figure><img alt="" src={GroupImg} /></figure>
                        <a title="" href="/">{this.state.group.groupname}</a>
                        <span>0 Members</span>
                        <button>join group</button>
                    </div>
                </div>);
    }
}
export default GroupList;

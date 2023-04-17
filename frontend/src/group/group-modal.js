import React from 'react';
//import Popup from 'reactjs-popup';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDownSvg from '../assest/images/arrow-down.svg'
import GroupService from './group-service';
import  AuthService from '../auth/auth_service'

class GroupModal extends React.Component{
    constructor(props) {
        console.log(props)
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onChangeGroupName = this.onChangeGroupName.bind(this);
        this.onChangeDescription= this.onChangeDescription.bind(this);
        this.state = {
          groupname: "",
          description: "",
        };
    }

    onChangeGroupName(e) {
        this.setState({
            groupname: e.target.value
        });
        console.log("post title: "+this.state.groupname)
      }
    
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
        console.log("post content: "+this.state.description)
    }

    onClose(){
      console.log("closed");
      this.setState({groupname: "", description: ""})
      this.props.handleClose();
    }

    handleSave(e) {
        e.preventDefault();
        console.log("Save group description: "+this.state.description)
        var currentUser = AuthService.getCurrentUser()
        console.log("Save discussion->user "+currentUser)
        var group = {groupname: this.state.groupname,
                    description: this.state.description,
                    userId: currentUser.id}
        GroupService.createGroup(group).then(response=>{
            this.fetchGroups();
         });
        this.onClose()
    }
    
    handleClose(e){
        e.preventDefault();
        this.onClose();
    }
    
    fetchGroups(){
      console.log("update group from popup....");
    }
    render(){
        return(<>
                <Modal show={this.props.open} onHide={this.handleClose}>
                    <Modal.Header>
                           <h6>
                                                    <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                      <line x1="12" y1="5" x2="12" y2="19"></line>
                                                      <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                   </i>
                                                Create new group
                                               </h6>
                                                <a href="/" onClick={this.handleClose}>
                                                    <span class="popup-closed"><i class="icofont-close"></i></span>
                                                </a>
                    </Modal.Header>
                    <Modal.Body>
                           <div class="post-new">
                                            <form method="post" class="c-form">
                                                <input placeholder="Group name"  value={this.state.groupname} onChange={this.onChangeGroupName}/>
                                                <textarea id="emojionearea1" placeholder="What's is group description?" 
                                                  value={this.state.description}  onChange={this.onChangeDescription} row="3"></textarea>
                                                <div class="activity-post">
                                                    <div class="checkbox">
                                                        <input type="checkbox" id="checkbox" checked />
                                                        <label for="checkbox"><span>Allow everyone</span></label>
                                                    </div>
                                                    <div class="checkbox">
                                                        <input type="checkbox" id="checkbox2" checked />
                                                        <label for="checkbox2"><span>Only friends</span></label>
                                                    </div>
                                                </div>
                                                <div class="select-box">
                                                    <div class="select-box__current" tabindex="1">
                                                        <div class="select-box__value"><input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked" />
                                                            <p class="select-box__input-text"><i class="icofont-globe-alt"></i> Public</p>
                                                        </div>
                                                        <div class="select-box__value"><input class="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked" />
                                                            <p class="select-box__input-text"><i class="icofont-lock"></i> Private</p>
                                                        </div>
                                                        <div class="select-box__value"><input class="select-box__input" type="radio" id="2" value="3" name="Ben" checked="checked" />
                                                            <p class="select-box__input-text"><i class="icofont-user"></i> Specific Friend</p>
                                                        </div>
                                                        <div class="select-box__value"><input class="select-box__input" type="radio" id="3" value="4" name="Ben" checked="checked" />
                                                            <p class="select-box__input-text"><i class="icofont-star"></i> Only Friends</p>
                                                        </div>
                                                        <div class="select-box__value"><input class="select-box__input" type="radio" id="4" value="5" name="Ben" checked="checked" />
                                                            <p class="select-box__input-text"><i class="icofont-users-alt-3"></i> Joined Groups</p>
                                                        </div>
                                                        <img class="select-box__icon" src={ArrowDownSvg} alt="Arrow Icon" aria-hidden="true" />
                                                    </div>
                                                    <ul class="select-box__list">
                                                        <li><label class="select-box__option" for="0"><i class="icofont-globe-alt"></i> Public</label></li>
                                                        <li><label class="select-box__option" for="1"><i class="icofont-lock"></i> Private</label></li>
                                                        <li><label class="select-box__option" for="2"><i class="icofont-user"></i> Specific Friend</label></li>
                                                        <li><label class="select-box__option" for="3"><i class="icofont-star"></i> Only Friends</label></li>
                                                        <li><label class="select-box__option" for="4"><i class="icofont-users-alt-3"></i> Joined Groups</label></li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <button type="submit" class="main-btn" onClick={this.handleSave}>Save</button>
                    </Modal.Footer>
                </Modal>
        </>)
    }
}

export default GroupModal;




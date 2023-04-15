import React, { Component } from "react";
import AuthService from '../auth/auth_service';
import ThumbsUp from '../assest/images/smiles/thumb.png';
import Heart from '../assest/images/smiles/heart.png';
import Smile from '../assest/images/smiles/smile.png';
import Weep from '../assest/images/smiles/weep.png';



class UserPostStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return ( <div class="stat-tools">
                    <div class="box">
                       <div class="Like"><a class="Like__link"><i class="icofont-like"></i> Like</a>
                        <div class="Emojis">
                            <div class="Emoji Emoji--like">
                                <div class="icon icon--like"></div>
                            </div>
                            <div class="Emoji Emoji--love">
                                <div class="icon icon--heart"></div>
                            </div>
                            <div class="Emoji Emoji--haha">
                                <div class="icon icon--haha"></div>
                            </div>
                            <div class="Emoji Emoji--wow">
                                <div class="icon icon--wow"></div>
                            </div>
                            <div class="Emoji Emoji--sad">
                                <div class="icon icon--sad"></div>
                            </div>
                            <div class="Emoji Emoji--angry">
                                <div class="icon icon--angry"></div>
                            </div>
                        </div>
                    </div>
                 </div>
                <div class="box">
                    <div class="Emojis">
                        <div class="Emoji Emoji--like">
                            <div class="icon icon--like"></div>
                        </div>
                        <div class="Emoji Emoji--love">
                            <div class="icon icon--heart"></div>
                        </div>
                        <div class="Emoji Emoji--haha">
                            <div class="icon icon--haha"></div>
                        </div>
                        <div class="Emoji Emoji--wow">
                            <div class="icon icon--wow"></div>
                        </div>
                        <div class="Emoji Emoji--sad">
                            <div class="icon icon--sad"></div>
                        </div>
                        <div class="Emoji Emoji--angry">
                            <div class="icon icon--angry"></div>
                        </div>
                    </div>
                </div>
                <div class="box">
                <a href="/" class="comment-to"><i class="icofont-comment"></i> Comment</a>

                </div>
                <div class="box">
                <a href="/" class="share-to"><i class="icofont-share-alt"></i> Share</a>

                </div>
        <div class="emoji-state">
            <div class="popover_wrapper">
                <a class="popover_title" href="#" title=""><img alt="" src={ThumbsUp} /></a>
                <div class="popover_content">
                    <span><img alt="" src={ThumbsUp} /> Likes</span>
                    <ul class="namelist">
                        <li>Jhon Doe</li>
                        <li>Amara Sin</li>
                        <li>Sarah K.</li>
                        <li><span>20+ more</span></li>
                    </ul>
                </div>
            </div>
            <div class="popover_wrapper">
                <a class="popover_title" href="#" title=""><img alt="" src={Heart}/></a>
                <div class="popover_content">
                    <span><img alt="" src={Heart}/> Love</span>
                    <ul class="namelist">
                        <li>Amara Sin</li>
                        <li>Jhon Doe</li>
                        <li><span>10+ more</span></li>
                    </ul>
                </div>
            </div>
            <div class="popover_wrapper">
                <a class="popover_title" href="#" title=""><img alt="" src={Smile}/></a>
                <div class="popover_content">
                    <span><img alt="" src={Smile} /> Happy</span>
                    <ul class="namelist">
                        <li>Sarah K.</li>
                        <li>Jhon Doe</li>
                        <li>Amara Sin</li>
                        <li><span>100+ more</span></li>
                    </ul>
                </div>
            </div>
            <div class="popover_wrapper">
                <a class="popover_title" href="#" title=""><img alt="" src={Weep} /></a>
                <div class="popover_content">
                    <span><img alt=""  src={Weep} /> Dislike</span>
                    <ul class="namelist">
                        <li>Danial Carbal</li>
                        <li>Amara Sin</li>
                        <li>Sarah K.</li>
                        <li><span>15+ more</span></li>
                    </ul>
                </div>
            </div>
            <p>10+</p>
        </div>
      </div>
    )
  }
}

export default UserPostStats
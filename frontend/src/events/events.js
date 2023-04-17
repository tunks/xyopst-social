import React, { Component } from "react";
import ClockImg from '../assest/images/clock.png';

class Events extends Component{
  render(){
    return ( <div class="widget">
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
            </div>);
  }
}

export default Events;
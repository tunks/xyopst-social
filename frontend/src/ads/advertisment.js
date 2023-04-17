
import React, { Component } from "react";
import AdImg from  '../assest/images/resources/ad-widget2.gif'

class Advertisment extends Component{
    render(){
        return 	<div class="widget">
                    <div class="advertisment-box">
                        <h4 class=""><i class="icofont-info-circle"></i> advertisment</h4>
                        <figure>
                            <a title="Advertisment" href="/adverts"><img alt="" src={AdImg}/></a>
                        </figure>
                    </div>
                </div>
    }
}


export default Advertisment;
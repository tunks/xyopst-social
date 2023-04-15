import React from 'react';

class SignupSucess extends React.Component{
    constructor(props) {
        super(props);
        console.log("Sucess")
        console.log(this.props)
        this.state = {
            signupStatus: "Success",
        };
      }
    
    render() {
      return  <div>

                    {/* <div class="alert alert-success" role="alert">
                    <div id="upper-side">
                    <span><i class="icofont-check-circled"></i></span>
                    </div>
                    <h6 class="alert-heading">
                    <div>{this.state.signupStatus}</div>
                    </h6>
                    <div>
                        <p>{this.props.message}</p>
                    </div>
                    </div> */}
                    <div class="signup-sucess">
                        <div id='card' class="animated fadeIn">
                            <div id='upper-side'>
                                <span><i class="icofont-check-circled"></i></span>
                                <h3 id='status'>{this.state.signupStatus}</h3>
                            </div>
                        <div id='lower-side'>
                            <p id='message'>
                            {this.props.message}
                            </p>
                            <div >
                              <a class="main-btn2" href="/login" title="Login">Login and join the community</a>
                            </div>
                        </div>
                        </div>
                    </div>
             </div>
 }
}

export default SignupSucess;

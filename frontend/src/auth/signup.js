import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import AuthService from './auth_service';
import bgImage from '../assest/images/resources/theme-bg.jpg'
import SignupSucess from './signup-success';

import './Login.css';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
    
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            gender: "male",
            isRegistered: false,
            message: ""
        };
      }
    
      onChangeFirstname(e) {
        this.setState({
          firstname: e.target.value
        });
        console.log("firstname: "+this.state.username)
      }
    
      onChangeLastname(e) {
        this.setState({
          lastname: e.target.value
        });
        console.log("lastname: "+this.state.password)
      }

      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
        console.log("username: "+this.state.username)
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
        console.log("password: "+this.state.password)
      }

      onChangeGender(e) {
        this.setState({
          gender: e.target.value
        });
        console.log("gender: "+this.state.gender)
      }


      router = function(){
        const navigate = useNavigate()
        return navigate
      }
    
      handleSignup(e) {
        e.preventDefault();
        console.log("handleSignup: "+this.state)

        // this.setState({
        //   message: "",
        //   loading: true
        // });
    
        // //this.form.validateAll();

        //if (this.checkBtn.context._errors.length === 0) {
          let user =  { firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        username: this.state.username,
                        password: this.state.password,
                        gender: this.state.gender
                      }

          AuthService.register(user).then((response) => {
               console.log("Response:: "+response.message);
               console.log(response);
              //  const message = "User is successfully registered. " +
              //                  "Please activate your account from your email.";
              //  let element = document.getElementById('message');
              //  element.innerText = message;
              //  element.style.color = "black";
              //  element.style.backgroundColor = "yellow";
              //  element.style.display = 'block';
               this.setState({
                isRegistered: true,
                message: response.message
               })

            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage
              });
            });
      }
    
    render() {
      return  <div>
            <section>
              <div class="gap no-gap signin whitish medium-opacity register">
                  <div class="bg-image" style={{backgroundImage: `url(${bgImage})`}}></div>
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-7">
                              <div class="big-ad">
                                  <figure><img src="images/logo2.png" alt="" /></figure>
                                  <h1>Welcome to XyOpst Social</h1>
                                  <p>
                                      XyOpst Social is a social network platform that community immigrants, students, and people from around the globe.
                                      We helps you connect and share with the people in your life.    
                                  </p>
                              </div>
                          </div>
                          <div class="col-lg-5">
                              <div class="ver-center signup-container">
                                  <div class="reg-from">
                                        <div class="signup-form">
                                          <h4><i class="icofont-lock"></i> Sign up</h4>
                                          {this.state.isRegistered ? (
                                               <SignupSucess message={this.state.message}/>
                                            ) : (
                                                <form method="post" class="c-form" onSubmit={this.handleSignup}>
                                                    <div class="row merged-10">
                                                        <div class="col-lg-12"><h4>Join the Xyopst Social Community</h4></div>
                                                        <div id="message" class="col-lg-12" style={{display: 'none'}} >
                                                          <div></div>
                                                        </div>
                                                        <div class="col-lg-12 col-sm-12 col-md-12">
                                                            <input type="text" placeholder="First Name"  value={this.state.firstname} onChange={this.onChangeFirstname}/>
                                                        </div>
                                                        <div class="col-lg-12 col-sm-12 col-md-12">
                                                            <input type="text" placeholder="Last Name" value={this.state.lastname} onChange={this.onChangeLastname}/>
                                                        </div>
                                                        <div class="col-lg-12 col-sm-12 col-md-12">
                                                            <input type="text" placeholder="Email@" value={this.state.username} onChange={this.onChangeUsername}/>
                                                        </div>
                                                        <div class="col-lg-12 col-sm-12 col-md-12">
                                                            <input type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="gender" onChange={this.onChangeGender}>
                                                              <input type="radio" id="male" name="gender"  checked={this.state.gender === "male"} value="male" />
                                                              <label for="male">Male</label>
                                                              <input type="radio" id="female" name="gender" value="female" />
                                                              <label for="female">Female</label>
                                                            </div>	
                                                        </div>
                                                        
                                                        <div class="col-lg-12">
                                                            <div class="checkbox">
                                                                <input type="checkbox" id="checkbox"/>
                                                                <label for="checkbox"><span>I agree the terms of Services and acknowledge the privacy policy</span></label>
                                                            </div>
                                                        </div>
                                                        <div class="signp-form-submit">
                                                            <button class="main-btn" type="submit"><i class="icofont-key"></i> Signup</button>
                                                        </div>
                                                    </div>
                                                </form>
                                             )}
                                      </div> 
                                  </div>
                              </div>	
                          </div>
                          
                      </div>
                  </div>
              </div>
          </section>
         
      </div>
           }
  
}

export default Signup;

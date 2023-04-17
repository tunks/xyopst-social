import React from 'react';
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import AuthService from './auth_service';
//import { withRouter } from '../common/with-router';
import './Login.css';
//import LoginTemplate from './LoginTemplate';
import bgImage from '../assest/images/resources/theme-bg.jpg'

class Login extends React.Component{
    constructor(props) {

        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
          loading: false,
          message: "",
          loginError: false
        };
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

      router = function(){
        const navigate = useNavigate()
        return navigate
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true,
          loginError: false
        });
    
        //this.form.validateAll();

        //if (this.checkBtn.context._errors.length === 0) {
            
          AuthService.login(this.state.username, this.state.password).then(
            () => {
               
             // this.router.navigate("/")
             // this.props.router.navigate("/profile");
              window.location.reload();
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              const data = error.response.data;
              this.setState({
                loading: false,
                message: data.error,
                loginError: true
              });

              console.log("loggin error:: ");
              console.log(useRouteLoaderData);
            }
          );

        // } else {
        //   this.setState({
        //     loading: false
        //   });
        // }
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
                                    <div class="ver-center">
                                        <div class="reg-from">
                                                <div class="login-form">
                                                        <h4><i class="icofont-key-hole"></i> Login</h4>
                                                        {this.state.loginError? 
                                                        <div class="alert alert-danger" role="alert">
                                                               {this.state.message}
                                                          </div>
                                                        :<></>}
                                                        <form method="post" class="c-form" onSubmit={this.handleLogin}>
                                                            <input type="text" placeholder="Username @"  
                                                                name="username"
                                                                value={this.state.username}
                                                                onChange={this.onChangeUsername} />
                                                            <input type="password" placeholder="xxxxxxxxxx" 
                                                                name="password"
                                                                value={this.state.password}
                                                                onChange={this.onChangePassword}/>
                                                            <div class="checkbox">
                                                                <input type="checkbox" id="checkbox" checked/>
                                                                <label for="checkbox"><span>Remember Me</span></label>
                                                            </div>
                                                            <div>
                                                            <button class="main-btn" type="submit"><i class="icofont-key"></i> Login</button>
                                                            </div>                   
                                                    </form>
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

export default Login;

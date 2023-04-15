import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './auth/Login'
import Home from './views/main'

import AuthService from './auth/auth_service'
import Signup from "./auth/signup";

class App extends Component {
  constructor(props) {
    super(props);
   // this.isSignupContextPath = this.isSignupContextPath(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      isLoggedIn: false,
      contextPath: window.location.pathname
    };
    console.log("context "+this.state.contextPath);
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log("current user: "+user);
    if (user) {
      console.log("current user logined ####: "+user);
      this.setState({
        currentUser: user,
        isLoggedIn: true,
        showModeratorBoard: user.roles.includes("MODERATOR"),
        showAdminBoard: user.roles.includes("ADMIN"),
        contextPath: window.location.pathname
      });
    }
  }

  isSignupContextPath(){
     return this.state.contextPath === '/join' || 
            this.state.contextPath === '/signup' || 
            this.state.contextPath === '/register';
  }
  render(){
    return <div className="App">
            {this.state.isLoggedIn ? 
              <Home />
               : 
              <>
                {this.isSignupContextPath()?<Signup /> : <Login /> }
              </>
            }
        </div>
  }
}

export default App;

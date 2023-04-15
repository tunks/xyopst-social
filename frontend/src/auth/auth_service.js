import axios from "axios";
//import { response } from "express";

const API_URL = "http://localhost:18080/api/v1/auth/";

class AuthService {
    
  login(username, password) {
    console.log("AuthService.login")
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        console.log("Login response..")
        console.log(response);
        if (response.data.accessToken) {
           localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    console.log('User logout: localStorage');
    localStorage.removeItem("user");
  }

  register(user) {
    console.log("Auth.register()......")
    return axios.post(API_URL + "signup",user)
    .then(response =>{
      console.log("Signup response..")
      console.log(response);
      return response.data
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
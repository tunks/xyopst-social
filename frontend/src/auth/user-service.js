import axios from 'axios';
import AuthHeader from './auth_header';

const API_URL = 'http://localhost:18080/api/v1/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: AuthHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: AuthHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: AuthHeader() });
  }
}

export default new UserService()
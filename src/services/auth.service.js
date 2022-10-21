/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import { Looks5 } from '@mui/icons-material';
import axios from 'axios';
import { DOMAIN_URL } from '../config';

class AuthService {
  login(email, password) {
    return axios.post(`${DOMAIN_URL}/user/sign_in`, { email, password }).then((response) => {
      if (response.data.token) {
        const user = (({ token, name, email }) => ({ token, name, email }))(response.data);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  signUp({ name, email, safetyQuestion, safetyAnswer, password, confirmPassword }) {
    return axios
      .post(`${DOMAIN_URL}/user/sign_up`, {
        name,
        email,
        safetyQuestion,
        safetyAnswer,
        password,
        confirmPassword,
      })
      .then((response) => {
        if (response.data.token) {
          const user = (({ token, name, email }) => ({ token, name, email }))(response.data);
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        }
        return response.data;
      });
  }
}

export default new AuthService();

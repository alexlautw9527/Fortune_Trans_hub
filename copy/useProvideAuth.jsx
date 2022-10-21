import React, { useState } from 'react';
import axios from 'axios';
import { DOMAIN_URL } from '../src/config';

export default function useProvideAuth() {
  const [user, setUser] = useState({ isLogin: false });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const login = ({ email, password }) => {
    const loginData = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: 'POST',
      body: loginData,
    };

    axios
      .post(`${DOMAIN_URL}/user/sign_in/`, requestOptions)
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((res) => {
        if (res.token) {
          const { token, name, email } = res;
          const userData = {
            ...user,
            isLogin: true,
            token,
            name,
            email,
          };
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        }
      })
      .catch((err) => setErrors(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signUp = ({ name, email, safetyQuestion, safetyAnswer, password, confirmPassword }) => {
    const signUpData = JSON.stringify({
      name,
      email,
      safetyQuestion,
      safetyAnswer,
      password,
      confirmPassword,
    });

    const requestOptions = {
      method: 'POST',
      body: signUpData,
    };

    axios
      .post(`${DOMAIN_URL}/user/sign_up/`, requestOptions)
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((res) => {
        if (res.token) {
          const { token, name, email } = res;
          const userData = {
            ...user,
            isLogin: true,
            token,
            name,
            email,
          };
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        }
      })
      .catch((err) => setErrors(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    errors,
  };
}

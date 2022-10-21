// import axios from 'axios';
import AuthService from '../../services/auth.service';

const Types = {
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAIL: 'SIGNUP_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT: 'LOGOUT',
  LOADING_TOGGLE: 'LOADING_TOGGLE',
};

// action creator/ thunk

export const loadingToggle = () => ({
  type: Types.LOADING_TOGGLE,
});

// thunk

export const signUp = (signUpData) => (dispatch) => {
  dispatch(loadingToggle());
  AuthService.signUp(signUpData)
    .then((data) => {
      dispatch({
        type: Types.SIGNUP_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: Types.SIGNUP_FAIL,
      });
    });
};

export const login = (email, password) => (dispatch) => {
  dispatch(loadingToggle());
  AuthService.login(email, password)
    .then((data) => {
      dispatch({
        type: Types.LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: Types.LOGIN_FAIL,
      });
    });
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: Types.LOGOUT,
  });
};
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { isLoggedIn: true, isLoading: false, user, isLogInFailed: false, isSignUpFailed: false }
  : {
      isLoggedIn: false,
      isLoading: false,
      user: null,
      isLogInFailed: false,
      isSignUpFailed: false,
    };

// eslint-disable-next-line default-param-last
const authReducer = (state = { ...initialState }, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isLoading: false,
      };
    case Types.SIGNUP_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        isSignUpFailed: true,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isLoading: false,
      };
    case Types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        isLogInFailed: true,
      };

    case Types.LOADING_TOGGLE:
      return {
        ...state,
        isLoading: !state.isLoading,
        isLogInFailed: false,
        isSignUpFailed: false,
      };

    case Types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        isLogInFailed: false,
      };

    default:
      return state;
  }
};

export default authReducer;

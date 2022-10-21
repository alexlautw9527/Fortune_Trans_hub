const Types = {
  SWITCH_LOGIN: 'SWITCH_LOGIN',
  SWITCH_SIGNUP: 'SWITCH_SIGNUP',
};

export const switchLogin = () => ({
  type: Types.SWITCH_LOGIN,
});

export const switchSignUp = () => ({
  type: Types.SWITCH_SIGNUP,
});
const initState = {
  switchStatus: 'login',
};

// eslint-disable-next-line default-param-last
const switchReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.SWITCH_LOGIN: {
      return { ...state, switchStatus: 'login' };
    }
    case Types.SWITCH_SIGNUP: {
      return {
        ...state,
        switchStatus: 'signUp',
      };
    }
    default:
      return state;
  }
};

export default switchReducer;

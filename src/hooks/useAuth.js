import { useSelector } from 'react-redux';

// eslint-disable-next-line import/prefer-default-export
export function useAuth() {
  const { user, isLoading, isLoggedIn, isLogInFailed, isSignUpFailed } = useSelector(
    (state) => state.authReducer
  );

  return {
    user,
    isLoading,
    isLoggedIn,
    isLogInFailed,
    isSignUpFailed,
  };
}

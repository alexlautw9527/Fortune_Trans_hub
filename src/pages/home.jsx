import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { logout } from '../store/ducks/auth';

function Home() {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return isLoggedIn ? (
    <div>
      Home
      <button type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  ) : (
    <Navigate to="/auth" replace />
  );
}

export default Home;

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

import { switchLogin, switchSignUp } from '../../store/ducks/pageSwitch';
import { useAuth } from '../../hooks/useAuth';

function SignUp() {
  const { isLoggedIn } = useAuth();
  const { switchStatus } = useSelector((state) => state.switchReducer);
  const dispatch = useDispatch();

  const handleTabSwitch = (event, newValue) => {
    if (newValue === 'login') {
      dispatch(switchLogin());
    } else {
      dispatch(switchSignUp());
    }
  };

  return isLoggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <div className=" flex min-h-screen items-center justify-center bg-orange-100">
      <div className="border-rad  container mx-auto h-[680px] max-w-screen-sm justify-between rounded-3xl bg-white p-8">
        <h1 className="mb-5 py-5 text-center text-3xl font-bold">🚅 轉運讚 Fortune Trans Hub</h1>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
          <Tabs variant="fullWidth" value={switchStatus} onChange={handleTabSwitch}>
            <Tab value="login" label="登入" sx={{ width: 1 / 2, fontSize: '1.2rem' }} />
            <Tab value="signUp" label="註冊" sx={{ width: 1 / 2, fontSize: '1.2rem' }} />
          </Tabs>
        </Box>
        {switchStatus === 'login' ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export default SignUp;

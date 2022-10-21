import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import { useSelector, useDispatch } from 'react-redux';
import FormTextInput from '../../components/FormTextInput';

import { login } from '../../store/ducks/auth';
import { useAuth } from '../../hooks/useAuth';

function LoginForm() {
  const { isLoading, isLogInFailed } = useAuth();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    watch,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const emailValRule = {
    required: '不得為空',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: '需為email格式',
    },
  };

  const passwordValRule = {
    required: '不得為空',
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormTextInput
          hookFromProps={{
            control,
            errors,
            rules: emailValRule,
            name: 'email',
          }}
          muiProps={{ fullWidth: true }}
          label="Email"
          inputType="email"
          inputProps={{ autoComplete: 'username' }}
        />

        <FormTextInput
          hookFromProps={{
            control,
            errors,
            rules: passwordValRule,
            name: 'password',
          }}
          muiProps={{ fullWidth: true }}
          label="Password"
          inputType="password"
          inputProps={{ autoComplete: 'new-password' }}
        />
        {isLogInFailed && <p>登入失敗</p>}
        <LoadingButton
          type="submit"
          loading={isLoading}
          loadingPosition="start"
          startIcon={<SendIcon />}
          variant="contained"
        >
          登入
        </LoadingButton>
      </Stack>
    </form>
  );
}

export default LoginForm;

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import { useDispatch } from 'react-redux';
import FormTextInput from '../../components/FormTextInput';
import FormSelectBox from '../../components/FormSelectBox';

import { signUp } from '../../store/ducks/auth';
import { useAuth } from '../../hooks/useAuth';

function SignUpForm() {
  const dispatch = useDispatch();
  const { isLoading, isSignUpFailed } = useAuth();

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
    pattern: {
      value: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/,
      message: '密碼需8碼，至少1個大寫字母、1個小寫字母、1個數字、1個特殊字元',
    },
  };

  const confirmPasswordValRule = {
    required: '不得為空',
    validate: (value) => value === getValues('password') || '密碼必須相符',
  };

  const onSubmit = (data) => {
    dispatch(signUp(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} justifyContent="space-between">
        <FormTextInput
          hookFromProps={{
            control,
            errors,
            rules: { required: '不得為空' },
            name: 'name',
          }}
          muiProps={{ fullWidth: true }}
          label="Name"
          inputType="text"
        />
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
          inputProps={{ autoComplete: 'email' }}
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

        <FormTextInput
          hookFromProps={{
            control,
            errors,
            rules: confirmPasswordValRule,
            name: 'confirmPassword',
          }}
          muiProps={{ fullWidth: true, autoComplete: 'new-password' }}
          label="Confirm Password"
          inputType="password"
        />

        <Stack direction="row" spacing={2} alignItems="flex-end">
          <FormSelectBox
            hookFromProps={{
              control,
              errors,
              rules: { required: true },
              name: 'safetyQuestion',
            }}
            muiProps={{ fullWidth: true }}
            label="安全提問"
          />

          <FormTextInput
            hookFromProps={{
              control,
              errors,
              rules: { required: '不得為空' },
              name: 'safetyAnswer',
            }}
            muiProps={{ fullWidth: true }}
            label="安全提問回答"
            inputType="text"
          />
        </Stack>

        {isSignUpFailed && <p>註冊失敗</p>}

        <LoadingButton
          type="submit"
          loading={isLoading}
          loadingPosition="start"
          startIcon={<SendIcon />}
          variant="contained"
        >
          註冊
        </LoadingButton>
      </Stack>
    </form>
  );
}

export default SignUpForm;

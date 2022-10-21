import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

function FormTextInput({ hookFromProps, muiProps, label, inputType, inputProps }) {
  const { control, errors, rules, name } = hookFromProps;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          variant="standard"
          label={label}
          type={inputType || 'text'}
          error={!!errors[name]}
          helperText={errors[name] && errors[name].message}
          {...muiProps}
          inputProps={{ ...inputProps }}
        />
      )}
    />
  );
}

export default FormTextInput;

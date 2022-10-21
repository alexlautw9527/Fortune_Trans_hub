import { Controller } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

function FormSelectBox({ hookFromProps, muiProps, label }) {
  const { control, errors, rules, name } = hookFromProps;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        // console.log(field);
        <FormControl {...muiProps} error={!!errors[name]}>
          <InputLabel id={name}>{label}</InputLabel>
          <Select labelId={name} id={name} label={label} {...field}>
            <MenuItem value="Q1_FIRST_PET_NAME">第一個寵物的名字？</MenuItem>
            <MenuItem value="Q2_PARENTS_CITY">父母相遇的城市？</MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
}

export default FormSelectBox;

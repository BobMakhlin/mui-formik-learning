import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useField } from "formik";

const SelectWrapper = ({ name, options, label }) => {
  const [field, meta] = useField(name);

  const formControlConfig = {
    fullWidth: true,
    variant: "outlined",
  };
  if (meta && meta.touched && meta.error) {
    formControlConfig.error = true;
    formControlConfig.helperText = meta.error;
  }

  return (
    <FormControl {...formControlConfig}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} label={label}>
        {Object.entries(options).map(([key, value]) => (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectWrapper;

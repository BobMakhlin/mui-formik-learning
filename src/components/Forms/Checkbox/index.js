import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useField } from "formik";

const CheckboxWrapper = ({ name, legend, label }) => {
  const [field, meta] = useField(name);

  const hasError = Boolean(meta && meta.touched && meta.error);
  const checkboxConfig = {
    ...field,
    checked: field.value,
  };
  const helperTextStyle = hasError ? {} : { display: "none" };

  return (
    <FormControl error={hasError}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...checkboxConfig} />}
          label={label}
        />
        <FormHelperText style={helperTextStyle}>{meta.error}</FormHelperText>
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;

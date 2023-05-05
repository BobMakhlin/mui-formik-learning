import { TextField } from "@mui/material";
import { useField } from "formik";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const config = {
    ...otherProps,
    ...field,
    fullWidth: true,
    variant: "outlined"
  }

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return <TextField {...config}></TextField>;
};

export default TextfieldWrapper;

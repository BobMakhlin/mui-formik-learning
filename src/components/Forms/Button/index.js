import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const SubmitButton = ({ children }) => {
  const { submitForm } = useFormikContext();

  const buttonConfig = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: submitForm,
  };

  return <Button {...buttonConfig}>{children}</Button>;
};

export default SubmitButton;

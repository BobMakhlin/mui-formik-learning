import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";
import { useCallback } from "react";

const SHOULD_VALIDATE = true;

const DatePickerWrapper = ({ name, label }) => {
  const [field, meta, { setValue, setTouched }] = useField(name);

  const handleChange = useCallback(
    (date) => {
      setValue(date, SHOULD_VALIDATE);
    },
    [setValue]
  );
  const handleDatePickerClose = useCallback(() => {
    if (!meta.touched) {
      // setTimeout to avoid validating an old value.
      setTimeout(() => setTouched(true, SHOULD_VALIDATE));
    }
  }, [meta.touched, setTouched]);
  const handleTextFieldBlur = useCallback(() => {
    if (!meta.touched) {
      setTouched(true, SHOULD_VALIDATE);
    }
  }, [meta.touched, setTouched]);

  const hasError = Boolean(meta && meta.touched && meta.error);

  const datePickerConfig = {
    label,
    variant: "outlined",
    ...field,
    onChange: handleChange,
    onClose: handleDatePickerClose,
  };
  const textFieldConfig = {
    fullWidth: true,
    error: hasError,
    helperText: hasError ? meta.error : null,
    onBlur: handleTextFieldBlur,
  };

  return (
    <DatePicker
      {...datePickerConfig}
      slotProps={{
        textField: { ...textFieldConfig },
      }}
    />
  );
};

export default DatePickerWrapper;

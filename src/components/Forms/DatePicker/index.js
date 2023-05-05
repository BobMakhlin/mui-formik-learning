import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";
import { useCallback } from "react";

const DatePickerWrapper = ({ name, label }) => {
  const [field, meta, { setValue, setTouched }] = useField(name);

  const handleChange = useCallback(
    (date) => {
      setValue(date, true);
    },
    [setValue]
  );
  const markAsTouched = useCallback(() => {
    if (!meta.touched) {
      setTouched(true, true);
    }
  }, [meta.touched, setTouched]);

  const hasError = Boolean(meta && meta.touched && meta.error);

  const datePickerConfig = {
    label,
    variant: "outlined",
    ...field,
    onChange: handleChange,
    onClose: markAsTouched,
  };
  const textFieldConfig = {
    fullWidth: true,
    error: hasError,
    helperText: hasError ? meta.error : null,
    onBlur: markAsTouched,
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

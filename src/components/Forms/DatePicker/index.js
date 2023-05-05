import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";
import { useCallback } from "react";

const DatePickerWrapper = ({ name }) => {
  const [field, meta, { setValue, setTouched }] = useField(name);

  const handleChange = useCallback(
    (date) => {
      setValue(date, true);
    },
    [setValue]
  );
  const markAsTouched = useCallback(() => {
    if (!meta.touched) {
        setTouched(true, false);
    }
  }, [meta.touched, setTouched]);

  const hasError = Boolean(meta && meta.touched && meta.error);

  const datePickerConfig = {
    ...field,
    onChange: handleChange,
    onClose: markAsTouched,
  };
  const textFieldConfig = {
    error: hasError,
    helperText: hasError ? meta.error : null,
    onBlur: markAsTouched,
  };

  return (
    <DatePicker
      variant="outlined"
      {...datePickerConfig}
      slotProps={{
        textField: { ...textFieldConfig },
      }}
    />
  );
};

export default DatePickerWrapper;

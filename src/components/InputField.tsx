import React from "react";
import TextField from "@material-ui/core/TextField";

interface InputFieldProps {
  label: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <TextField
      variant="outlined"
      label={props.label}
      fullWidth
      required
      disabled={props.disabled}
      onChange={(e) => props.onChange(e)}
    />
  );
};

export default InputField;

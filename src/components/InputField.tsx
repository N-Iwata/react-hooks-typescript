import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

interface InputFieldProps {
  label: string;
  disabled: boolean;
  multiline: boolean;
  rows: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const useStyles = makeStyles({
  root: {
    marginBottom: 16,
    width: 600,
    display: "block",
  },
});

const InputField: React.FC<InputFieldProps> = (props) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      variant="outlined"
      label={props.label}
      value={props.value}
      fullWidth
      required
      disabled={props.disabled}
      onChange={(e) => props.onChange(e)}
      multiline={props.multiline}
      rows={props.rows}
    />
  );
};

export default InputField;

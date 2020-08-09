import React from "react";
import Button from "@material-ui/core/Button";

interface InputButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
  disabled: boolean;
  onClick: () => void;
}

const InputButton: React.FC<InputButtonProps> = (props) => {
  return (
    <div className="button">
      <Button type={props.type} variant="contained" color={props.color} disabled={props.disabled} onClick={(e) => props.onClick()}>
        {props.text}
      </Button>
    </div>
  );
};

export default InputButton;

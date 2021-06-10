import React from "react";
import { InputProps } from "./Input.interface";
import StyledInput from "./style";

const Input = (props: InputProps): JSX.Element => {
  const { placeholder, onChange, style, icon } = props;

  return (
    <StyledInput
      placeholder={placeholder ?? ""}
      onChange={onChange}
      style={style}
      data-icon={icon}
    />
  );
};

export default Input;

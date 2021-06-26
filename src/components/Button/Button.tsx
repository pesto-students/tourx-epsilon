import React from "react";
import ButtonProps from "./Button.interface";
import { OutlineButton, PrimaryButton } from "./style";

const Button = (props: ButtonProps): JSX.Element => {
  const { type, children, onClick, disabled } = props;
  return (
    <>
      {type === "outline" ? (
        <OutlineButton onClick={onClick} disabled={disabled}>
          {children}
        </OutlineButton>
      ) : (
        <PrimaryButton onClick={onClick} disabled={disabled}>
          {children}
        </PrimaryButton>
      )}
    </>
  );
};

export default Button;

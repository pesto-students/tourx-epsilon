import React from "react";
import ButtonProps from "./Button.interface";
import { OutlineButton, PrimaryButton } from "./style";

const Button = (props: ButtonProps): JSX.Element => {
  const { type, children, onClick } = props;
  return (
    <>
      {type === "outline" ? (
        <OutlineButton onClick={onClick}>{children}</OutlineButton>
      ) : (
        <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
      )}
    </>
  );
};

export default Button;

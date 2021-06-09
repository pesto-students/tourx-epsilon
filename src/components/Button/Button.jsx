/* eslint-disable react/require-default-props */
import React from "react";
import Proptypes from "prop-types";
import { ButtonWrapper, IconItem, Label } from "./Style";

function Button({ label, onClick, type, color, icon }) {
  return (
    <ButtonWrapper onClick={onClick} type={type} color={color}>
      <Label>{label}</Label> {icon && <IconItem>{icon}</IconItem>}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  label: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
  type: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  icon: Proptypes.node,
};

export default Button;

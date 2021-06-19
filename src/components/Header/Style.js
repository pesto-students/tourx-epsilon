/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { Toolbar, Button, AppBar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  .MuiPaper-elevation4 {
    box-shadow: ${(props) =>
      props.elevation === "none"
        ? "none"
        : `0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)`} !important;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const DrawerContainer = styled.div`
  padding: 20px 30px;
`;

export const LogoItem = styled(Link)`
  font-weight: 600;
  color: ${(props) =>
    props.isTransparent ? "#fffefe" : props.theme.colors.black};
  text-align: left;
  font-size: 30px !important;
  &:link {
    text-decoration: none;
  }
  @media screen and (max-width: 540px) {
    font-size: 24px !important;
  }
`;

export const MenuButton = styled(Button)`
  font-weight: 700;
  size: 18px;
  color: ${(props) =>
    props.isTransparent
      ? props.theme.colors.white
      : props.theme.colors.black} !important;
  margin-left: 38px;
  padding: 8px 20px !important;
`;
export const StyledAppBar = styled(AppBar)`
  background-color: #400ccc;
  padding-right: 118px;
  padding-left: 118px;
  padding-top: 10px;
  height: 80px;
  @media (max-width: 900px) {
    padding-left: 0px !important;
    padding-right: 0px;
  }
  @media screen and (max-width: 540px) {
    height: auto !important;
    padding-left: 0px !important;
    padding-right: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const ActionButton = styled(Button)`
  background-color: ${(props) =>
    props.outline === "outline"
      ? "transparent"
      : props.theme.colors.black} !important ;
  color: ${(props) =>
    props.isTransparent && props.outline === "contained"
      ? props.theme.colors.white
      : !props.isTransparent && props.outline === "contained"
      ? props.theme.colors.white
      : props.isTransparent && props.outline === "outline"
      ? props.theme.colors.white
      : !props.isTransparent && props.outline === "outline"
      ? props.theme.colors.black
      : props.theme.colors.white} !important;
  border: ${(props) =>
    props.outline === "outline" ? "1px solid" : "none"} !important;
  border-color: ${(props) =>
    props.isTransparent ? "white" : "black"} !important;
  margin: 8px 20px !important;
  @media (max-width: 500px) {
    margin: 8px 5px !important;
  }
`;

export const MenuIconButton = styled(IconButton)`
  color: ${(props) => (props.isTransparent ? "white" : "black")} !important;
`;

export const EndWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

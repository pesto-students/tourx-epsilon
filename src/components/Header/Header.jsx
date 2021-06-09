/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from "react";
import { Toolbar, Drawer, MenuItem, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import {
  HeaderWrapper,
  StyledToolbar,
  DrawerContainer,
  StyledAppBar,
  MenuButton,
  LogoItem,
  ActionButton,
  MenuIconButton,
  EndWrapper,
} from "./Style";

const headersData = [
  {
    label: "Categories",
    href: "/listings",
  },
  {
    label: "About us",
    href: "/mentors",
  },
];
const Header = ({ isTransparent }) => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  // Logo
  const tourxLogo = (
    <LogoItem variant="h6" component="h1" isTransparent={isTransparent}>
      TourX
    </LogoItem>
  );
  // Get Menus
  const getMenuButtons = () => {
    return (
      <>
        {headersData.map(({ label }) => {
          return (
            <>
              <MenuButton
                {...{
                  key: label,
                }}
                isTransparent={isTransparent}
              >
                {label}
              </MenuButton>
            </>
          );
        })}
        <ActionButton
          variant="outlined"
          outline="outline"
          isTransparent={isTransparent}
        >
          Login
        </ActionButton>
        <ActionButton variant="contained" isTransparent>
          SignUp
        </ActionButton>
      </>
    );
  };

  const getDrawerChoices = () => {
    return (
      <>
        {headersData.map(({ label }) => {
          return <MenuItem>{label}</MenuItem>;
        })}
      </>
    );
  };
  // Desktop Nav
  const displayDesktop = () => {
    return (
      <StyledToolbar>
        {tourxLogo}
        <div>{getMenuButtons()}</div>
      </StyledToolbar>
    );
  };

  // Mobile View
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <MenuIconButton
          {...{
            edge: "start",
            color: "primary",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </MenuIconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <DrawerContainer>{getDrawerChoices()}</DrawerContainer>
        </Drawer>

        <div>{tourxLogo}</div>
        <EndWrapper>
          <ActionButton variant="outlined" outline="outline">
            Login
          </ActionButton>
          <ActionButton variant="contained">SignUp</ActionButton>
        </EndWrapper>
      </Toolbar>
    );
  };

  return (
    <HeaderWrapper elevation={isTransparent ? "none" : "apply"}>
      <header>
        <StyledAppBar color={isTransparent ? "transparent" : "light"}>
          {mobileView ? displayMobile() : displayDesktop()}
        </StyledAppBar>
      </header>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isTransparent: PropTypes.bool,
};

Header.defaultProps = {
  isTransparent: false,
};

export default Header;

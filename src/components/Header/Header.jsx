/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from "react";
import { Toolbar, Drawer, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
    href: "/category/9023132",
  },
  {
    label: "About us",
    href: "/",
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
    <LogoItem to="/" isTransparent={isTransparent}>
      TourX
    </LogoItem>
  );
  // Get Menus
  const getMenuButtons = () => {
    return (
      <>
        {headersData.map(({ label, href }) => {
          return (
            <>
              <Link to={href}>
                <MenuButton
                  {...{
                    key: label,
                  }}
                  isTransparent={isTransparent}
                >
                  {label}
                </MenuButton>
              </Link>
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
        <ActionButton
          variant="contained"
          outline="contained"
          isTransparent={isTransparent}
          compo
        >
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
          isTransparent={isTransparent}
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
          <ActionButton
            variant="outlined"
            outline="outline"
            isTransparent={isTransparent}
          >
            Login
          </ActionButton>
          <ActionButton
            variant="contained"
            outline="contained"
            isTransparent={isTransparent}
          >
            SignUp
          </ActionButton>
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

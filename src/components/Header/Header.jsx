/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from "react";
import {
  Toolbar,
  Drawer,
  MenuItem,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { uuid } from "uuidv4";
import {
  HeaderWrapper,
  StyledToolbar,
  DrawerContainer,
  StyledAppBar,
  MenuButton,
  LogoItem,
  InnerItem,
  ActionButton,
  MenuIconButton,
  EndWrapper,
} from "./Style";
import { setIsAuth, logoutUser } from "../../redux/commonActions/auth";
import Signup from "../../containers/WelcomeGuide/SignUpForm/Signup";
import Login from "../LoginForm/Login";

const headersData = [
  {
    label: "About us",
    href: "/",
  },
];
const Header = ({
  isTransparent,
  elevation,
  isAuth,
  setIsAuth,
  logoutUser,
}) => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    loading: false,
    open: false,
    loginOpen: false,
  });

  const { mobileView, drawerOpen, loading, open, loginOpen } = state;

  const history = useHistory();

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

  const logout = () => {
    setState({ ...state, loading: true });
    localStorage.removeItem("AuthToken");
    logoutUser();
    setTimeout(() => {
      setState({ ...state, loading: true });
      setIsAuth(false);
    }, 2000);
  };

  // Logo
  const tourxLogo = (
    <LogoItem to="/">
      <InnerItem isColored={isTransparent}>TourX</InnerItem>
    </LogoItem>
  );
  // Get Menus
  const getMenuButtons = () => {
    return (
      <>
        {headersData.map(({ label, href }) => {
          return (
            <Link to={href} key={uuid()}>
              <MenuButton
                {...{
                  key: label,
                }}
                isTransparent={isTransparent}
              >
                {label}
              </MenuButton>
            </Link>
          );
        })}
        {isAuth ? (
          <>
            <ActionButton
              variant="outlined"
              outline="outline"
              isTransparent={isTransparent}
              onClick={() => history.push("/my-account")}
            >
              My Account
            </ActionButton>
            <ActionButton
              variant="outlined"
              outline="outline"
              isTransparent={isTransparent}
              onClick={() => logout()}
              startIcon={loading ? <CachedIcon /> : null}
            >
              Logout
            </ActionButton>
          </>
        ) : (
          <>
            <ActionButton
              variant="outlined"
              outline="outline"
              isTransparent={isTransparent}
              onClick={() => setState({ ...state, loginOpen: true })}
            >
              Login
            </ActionButton>
            <ActionButton
              variant="contained"
              outline="contained"
              isTransparent={isTransparent}
              onClick={() => setState({ ...state, open: true })}
            >
              SignUp
            </ActionButton>{" "}
          </>
        )}
        <Dialog
          open={open}
          onClose={() => setState({ ...state, open: false })}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth
          maxWidth="sm"
        >
          <DialogContent>
            <Signup padding="2rem 2rem" isModal />
          </DialogContent>
        </Dialog>
        <Dialog
          open={loginOpen}
          onClose={() => setState({ ...state, loginOpen: false })}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth
          maxWidth="sm"
        >
          <DialogContent>
            <Login
              padding="2rem 2rem"
              isModal
              handleDrawerClose={() => setState({ ...state, loginOpen: false })}
            />
          </DialogContent>
        </Dialog>
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
    <HeaderWrapper elevation={isTransparent ? "none" : elevation}>
      <header>
        <StyledAppBar color={isTransparent ? "transparent" : "inherit"}>
          {mobileView ? displayMobile() : displayDesktop()}
        </StyledAppBar>
      </header>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isTransparent: PropTypes.bool,
  elevation: PropTypes.string,
  isAuth: PropTypes.bool,
  setIsAuth: PropTypes.func,
  logoutUser: PropTypes.func,
};

Header.defaultProps = {
  isTransparent: false,
  elevation: "apply",
  isAuth: false,
  setIsAuth: () => {},
  logoutUser: () => {},
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setIsAuth, logoutUser })(Header);

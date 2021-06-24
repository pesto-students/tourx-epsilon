/* eslint-disable react-hooks/exhaustive-deps */
import { Snackbar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import WarningIcon from "@material-ui/icons/Warning";
import { connect } from "react-redux";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ErrorLayout, ErrorSpan } from "../Stepper/styles";
// import StrikedText from "../../../components/StrikedText/StrikedText";
import useGenericState from "../../Library/useGenericState";
import { authenticateUser, loginUser } from "../../redux/commonActions/auth";
import {
  ButtonWrapper,
  Container,
  Header,
  InputContainer,
  Label,
  SubHeader,
} from "./style";

const Login = (props: any): JSX.Element => {
  const [state, setState] = useGenericState({
    username: "",
    password: "",
    showSnackBar: false,
    snackBarMessage: "",
  });

  const { username, password, showSnackBar, snackBarMessage } = state;

  const { isAuth, handleDrawerClose } = props;
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth]);

  const handleLogin = async () => {
    if (username === "" || password === "") {
      setState({
        showSnackBar: true,
        snackBarMessage: "Username and Password are Required",
      });
      return;
    }

    const response = await props.loginUser({
      email: state.username,
      password: state.password,
    });

    if (response.isSuccess) {
      props.authenticateUser(response.token);
      handleDrawerClose();
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ showSnackBar: false });
  };
  return (
    <Container>
      <Header>Login for Tourx</Header>
      <SubHeader>
        Login using your email address or phone number below to get started.
      </SubHeader>
      <InputContainer>
        <Label>Email or phone number</Label>
        <Input
          placeholder="mail@mail.com or 91-XXXXXXXXXX"
          icon="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          onChange={(e) => setState({ username: e.target.value })}
        />
      </InputContainer>
      <InputContainer>
        <Label>Password</Label>
        <Input
          placeholder="Enter Password"
          type="password"
          icon="https://img.icons8.com/ios/452/password--v1.png"
          onChange={(e) => setState({ password: e.target.value })}
        />
      </InputContainer>
      <ButtonWrapper>
        <Button type="primary" onClick={handleLogin}>
          Login to Tourx
        </Button>
      </ButtonWrapper>

      {/* <StrikedText text="OR" />

      <Button type="outline" onClick={handleSignup}>
        Continue with Google
      </Button>
      <Button type="outline" onClick={handleSignup}>
        Continue with Apple
      </Button> */}
      <Snackbar
        open={showSnackBar}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <ErrorLayout>
          <WarningIcon />
          <ErrorSpan>{snackBarMessage}</ErrorSpan>
        </ErrorLayout>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  selectedCategories: state.welcomeGuide.selectedCategory,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  loginUser,
  authenticateUser,
})(Login);

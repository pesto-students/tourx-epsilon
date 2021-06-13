import React from "react";
import { connect } from "react-redux";
import Button from "../../../components/Button/Button";
import StyledCheckbox from "../../../components/Checkbox/Checkbox";
import Input from "../../../components/Input/Input";
import StrikedText from "../../../components/StrikedText/StrikedText";
import useGenericState from "../../../Library/useGenericState";
import { setFormValues, setShowWelcomeModal } from "../action";
import {
  Container,
  Header,
  InputContainer,
  Label,
  LabelContainer,
  Span,
  SubHeader,
} from "./style";

const Signup = (props: any): JSX.Element => {
  const [state, setState] = useGenericState({
    username: "",
    password: "",
  });

  const { username, password } = state;

  const handleSignup = () => {
    props.setFormValues({ username, password });
    props.setShowWelcomeModal(false);
    localStorage.setItem("showWelcomeDialog", "true");
  };
  return (
    <Container>
      <Header>Sign up for Tourx</Header>
      <SubHeader>
        Sign up using your email address or phone number below to get started.
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
          icon="https://img.icons8.com/ios/452/password--v1.png"
          onChange={(e) => setState({ password: e.target.value })}
        />
      </InputContainer>
      <LabelContainer>
        <StyledCheckbox />
        <Span>I agree to the terms and conditions</Span>
      </LabelContainer>
      <Button type="primary" onClick={handleSignup}>
        Create Account
      </Button>

      <StrikedText text="OR" />

      <Button type="outline" onClick={handleSignup}>
        Continue with Google
      </Button>
      <Button type="outline" onClick={handleSignup}>
        Continue with Apple
      </Button>
    </Container>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { setFormValues, setShowWelcomeModal })(
  Signup
);

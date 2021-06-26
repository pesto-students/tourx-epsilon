/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Button from "@material-ui/core/Button";
import Header from "../Header/Header";
import {
  Container,
  Wrapper,
  Reload,
  Text,
  Illustration,
  StyledButton,
} from "./Style";
import ErroSvg from "../../static/error.svg";
import Footer from "../Footer/Footer";

function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return (
    <>
      <Header isTransparent={false} />
      <Container>
        <Wrapper>
          <Illustration src={ErroSvg} alt="error" />
          <Text>Opps! , Something Went Wrong</Text>
          <StyledButton
            onClick={resetErrorBoundary}
            variant="contained"
            color="primary"
          >
            Retry
          </StyledButton>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

export default ErrorFallback;

/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import {
  Container,
  Wrapper,
  Reload,
  Text,
  Illustration,
  StyledButton,
} from "./Style";
import ErroSvg from "../../static/404-1.gif";

function NotFoundPage() {
  return (
    <>
      <Header isTransparent={false} />
      <Container>
        <Wrapper>
          <Illustration src={ErroSvg} alt="error" />
          <Text>Oops! We couldn’t find that page.</Text>
          <Link to="/">
            <StyledButton variant="contained" color="primary">
              Back to Home
            </StyledButton>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
}

export default NotFoundPage;

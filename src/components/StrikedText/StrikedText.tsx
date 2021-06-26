import React from "react";
import StrikedTextProps from "./StrikedText.interface";
import { Container, Span, StyledHr } from "./style";

const StrikedText = (props: StrikedTextProps): JSX.Element => {
  const { text } = props;
  return (
    <Container>
      <StyledHr />
      <Span>{text}</Span>
      <StyledHr />
    </Container>
  );
};

export default StrikedText;

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "./style";

const NoResult: React.FC = () => {
  return (
    <Container>
      <LazyLoadImage src="http://www.fmda.in/images/found.gif" />
    </Container>
  );
};

export default NoResult;

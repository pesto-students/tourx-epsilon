/* eslint-disable no-self-assign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-return-assign */
import React from "react";
import { Wrapper } from "./style";
import Header from "../Header/Header";
import noInternet from "../../static/no-internet.png";
import Button from "../Button/Button";

const NetworkError: React.FC = () => {
  return (
    <div>
      <Header isTransparent={false} />
      <Wrapper>
        <img src={noInternet} alt="no internet connection " />
        <h2>No Internet Access, Please check your connection</h2>
        <div style={{ width: "100px" }}>
          <Button type="button" onClick={() => (location.href = location.href)}>
            Retry
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default NetworkError;

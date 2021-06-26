import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  div.selectBox {
    width: 50%;
    margin-top: -20px;
  }
`;

export const Modal = styled.div`
  width: 50%;
  height: 600px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: white;
  padding: 24px 48px;
`;

export const ErrorSpan = styled.p`
  font-size: 12px;
  color: red;
`;

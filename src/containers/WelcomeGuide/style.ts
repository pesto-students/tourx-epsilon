import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(105, 102, 102, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 40%;
  min-height: 450px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: white;
  padding: 24px 48px;
  padding-bottom: 48px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

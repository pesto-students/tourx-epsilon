import styled from "styled-components";
import { Modal } from "@material-ui/core";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  outline: 0;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 480px;
  overflow-y: auto;
  padding: 0.75rem 0rem;
  margin-top: 0.75rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Body = styled.div`
  width: 50%;
  min-height: 450px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: white;
  padding: 24px 48px;
  padding-bottom: 48px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    position: absolute;
  }
  @media screen and (max-width: 320px) {
    bottom: -100px;
  }
`;

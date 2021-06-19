/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
  margin: 50px 0px 0px 90px;
  @media screen and (max-width: 540px) {
    margin: 30px 0px 0px 30px;
  }
`;

export const Anchor = styled.p`
  text-align: right;
  padding: 0px 90px;
  color: blue;
  font-size: 14px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 0px 30px;
  }
`;

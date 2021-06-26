/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  margin: 4rem 0rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: calc(50% - 50.5px);
    width: 100px;
    height: 2px;
    background: #ff5300;
  }
  @media screen and (max-width: 540px) {
    margin: 30px 0px 0px 30px;
  }
`;

export const Anchor = styled.p`
  text-align: right;
  padding: 0px 0px;
  color: blue;
  font-size: 14px;
  cursor: pointer;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    padding: 0px 30px;
  }
`;

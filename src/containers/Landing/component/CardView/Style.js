import styled from "styled-components";
import { Card, CardMedia, CardContent } from "@material-ui/core";

export const CardWrapper = styled(Card)`
  /* max-width: 300px; */
  /* margin: 2%; */
  width: 100%;
  height: 350px;
  position: relative;
  border-radius: 10px !important;
  @media screen and (max-width: 369px) {
    height: 180px;
  }
  @media screen and (max-width: 540px) and (min-width: 368px) {
    height: 220px;
  }
`;
export const Image = styled(CardMedia)`
  /* position: absolute; */
  height: 100%;
  width: 100%;
  filter: blur(3%) !important;
`;
export const Info = styled(CardContent)`
  position: absolute;
  top: 30px;
  @media screen and (max-width: 540px) {
    padding-bottom: 10px !important;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 5px;
  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
`;
export const Description = styled.div`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 540px) {
    margin-bottom: 10px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Tag = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
export const Icon = styled.div`
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
export const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

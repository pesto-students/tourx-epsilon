import styled from "styled-components";

export const Container = styled.div`
  min-height: 550px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: row nowrap;
  height: 550px;
  max-width: 1400px;
  margin: auto;
  padding: 130px 70px 0px 70px;
  @media screen and (min-width: 580px) {
    padding: 130px 30px 0px 30px;
  }
  @media screen and (max-width: 1024px) {
    min-height: 350px;
    height: 350px;
    /* padding: 130px 30px 0px 30px; */
  }
  @media screen and (max-width: 768px) {
    /* min-height: 250px;
    height: 250px; */
  }
`;

export const LeftImage = styled.div`
  flex: 1 1;
`;

export const ImageItem = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: unset;
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const SubGrid = styled.div`
  flex: 0 0 39.5%;
  display: grid;
  grid-gap: 5px;
  margin-left: 5px;
`;
export const SubItem = styled.div`
  position: relative;
  &:nth-child(2) {
    grid-column: 2;
  }
`;

export const SubItemImg = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  /* &:nth-child(3) {
    border-top-right-radius: 10px;
  } */
`;

export const SmImage = styled.div`
  height: 728px;
`;
export const WrapperSm = styled.div`
  height: 100%;
  flex: 1 1;
`;

export const Banner = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  position: unset;
`;

export const ButtonLi = styled.button`
  position: absolute;
  top: 114px;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Span = styled.span`
  & [class^="tours-icon-"] {
    font-size: 1.8rem;
    margin-right: 10px;
  }

  [class^="tours-icon-"],
  [class*=" tours-icon-"] {
    font-family: "tours-app" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    margin-right: 2px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* &::before {
    content: "";
  } */
`;

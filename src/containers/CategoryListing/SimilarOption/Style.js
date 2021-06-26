/* eslint-disable import/prefer-default-export */
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${(props) => (props.padding ? "0px 30px" : "0px")};
  margin: ${(props) => (props.margin ? "0px 30px" : "0px")};
  .slick-list {
    height: auto !important;
    padding-left: 0.5% !important;
    .slick-slide img {
      /* border: 5px solid #fff; */
      display: block;
      margin: auto;
      max-width: 100% !important;
    }
  }
  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: none !important;
  }
  [dir="rtl"] .slick-prev:before {
    content: none !important;
  }

  .slick-next {
    right: -15px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -20px;
  }
  .slick-next:before {
    content: none !important;
  }
  [dir="rtl"] .slick-next:before {
    content: none !important;
  }
  @media screen and (max-width: 540px) {
    padding: ${(props) => (props.padding ? "0px 30px" : "0px")};
    margin: ${(props) => (props.margin ? "0px 0px 0px 0px" : "0px")};
    .slick-list {
      padding-top: 0px !important;
    }
  }
`;

export const Container = styled.div`
  width: 100% !important;
`;

export const InnerWrapper = styled.div`
  margin: 10px 30px;
  @media screen and (max-width: 540px) {
    margin: 10px 10px;
  }
`;

export const SkeletonWrapper = styled(Skeleton)`
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

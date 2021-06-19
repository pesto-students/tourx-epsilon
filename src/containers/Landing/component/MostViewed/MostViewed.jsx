/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
import React, { useState } from "react";
import Slider from "react-slick";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../../../../vendor/Slick/slick-theme.css";
import "../../../../vendor/Slick/slick.css";
import "../../../../vendor/Slick/common.css";
import {
  ChevronBackCircleOutline,
  ChevronForwardCircleOutline,
} from "react-ionicons";
import { Wrapper, Container, InnerWrapper } from "./Style";
import CardView from "../CardView/CardView";

function MostViewed({ margin, padding }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTab = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  const [, setState] = useState({
    oldSlide: 0,
    activeSlide: 0,
  });
  let slide;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile || isTab ? 2 : isTablet ? 3 : 4,
    slidesToScroll: isMobile ? 2 : 4,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) =>
      setState({ oldSlide: current, activeSlide: next }),
    //  afterChange: (current) => setState({ activeSlide: current })
  };

  function SamplePrevArrow(props) {
    const { onClick, className, style } = props;
    return (
      <ChevronBackCircleOutline
        onClick={onClick}
        color="gray"
        width="35px"
        height="35px"
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
      />
    );
  }
  function SampleNextArrow(props) {
    const { onClick, className, style } = props;
    return (
      <ChevronForwardCircleOutline
        onClick={onClick}
        color="gray"
        width="35px"
        height="35px"
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
      />
    );
  }

  return (
    <Wrapper padding={padding} margin={margin}>
      <Slider {...settings} ref={(c) => (slide = c)}>
        {[0, 2, 0, 0, 0, 0, 0, 0, 0].map((i) => {
          return (
            <Container>
              <InnerWrapper>
                <CardView />
              </InnerWrapper>
            </Container>
          );
        })}
      </Slider>
    </Wrapper>
  );
}

export default MostViewed;

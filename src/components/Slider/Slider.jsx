/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import "../../vendor/Slick/slick-theme.css";
import "../../vendor/Slick/slick.css";
import "../../vendor/Slick/common.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NavWrapper, NavFor, NavBack } from "./Style";

import SliderCard from "../SliderCard/SliderCard";

const HeroSlider = ({ items, setState, activeSlide }) => {
  const matches = useMediaQuery("(max-width:600px)");
  let slide;
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: matches ? 2 : 3.5,
    arrows: false,
    adaptiveHeight: false,
    variableWidth: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1500,
    beforeChange: (current, next) =>
      setState({ oldSlide: current, activeSlide: next }),
    // afterChange: (current) => setState({ activeSlide2: current })
  };
  const handleNext = () => {
    slide.slickNext();
    // console.log("asd");
  };
  const handlePrev = () => {
    slide.slickPrev();
  };
  return (
    <div className="slider-wrapper">
      <Slider {...settings} ref={(c) => (slide = c)}>
        {items.map((item, index) => {
          return (
            <SliderCard
              item={item}
              key={item.id}
              active={index === activeSlide}
            />
          );
        })}
      </Slider>
      <NavWrapper>
        <NavFor
          color="#d1d8e3"
          width="35px"
          height="35px"
          onClick={handlePrev}
        />
        <div style={{ marginRight: "5px" }} />
        <NavBack
          color="#d1d8e3"
          width="35px"
          height="35px"
          onClick={handleNext}
        />
      </NavWrapper>
    </div>
  );
};

export default HeroSlider;

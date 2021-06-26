/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import "../../vendor/Slick/slick-theme.css";
import "../../vendor/Slick/slick.css";
import "../../vendor/Slick/common.css";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NavWrapper, NavFor, NavBack } from "./Style";

import SliderCard from "../SliderCard/SliderCard";

const HeroSlider = ({ items, setState, activeSlide, addToFavourait, user }) => {
  // const isMobile = useMediaQuery("(max-width:600px)");
  // const desktop = useMediaQuery("(max-width:1400px)");
  // const largeScreens = useMediaQuery("(max-width:1900px)");
  // const extraLarge = useMediaQuery("(max-width:3400px and min-width:2000px)");
  // console.log(desktop, largeScreens, extraLarge);
  let slide;
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    arrows: false,
    adaptiveHeight: false,
    variableWidth: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
              active={index === activeSlide ? true : false}
              addToFavourait={addToFavourait}
              user={user}
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
          data-test="prev"
        />
        <div style={{ marginRight: "5px" }} />
        <NavBack
          color="#d1d8e3"
          width="35px"
          height="35px"
          onClick={handleNext}
          data-test="next"
        />
      </NavWrapper>
    </div>
  );
};

export default HeroSlider;

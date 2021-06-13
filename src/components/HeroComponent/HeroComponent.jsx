/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";
import Slider from "../Slider/Slider";
import { InfoWrapper, Info, Title, Wrapper, Section } from "./Style";
import data from "../Slider/data";
import Header from "../Header/Header";

// const handleClick = () => {
//   console.log("Clicked");
// };

const HeroComponent = () => {
  const [state, setState] = useState({ oldSlide: 0, activeSlide: 0 });
  const [movedBelow, setMovedBelow] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setMovedBelow(true);
    } else {
      setMovedBelow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const variants = {
    hidden: {
      y: "20px",
      opacity: 0,
      transition: { duration: 0.5, type: "tween" },
    },
    show: {
      y: "0px",
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
        type: "tween",
      },
    },
  };
  const item = {
    hidden: {
      y: "20px",
      opacity: 0,
      transition: { duration: 0.5, type: "tween" },
    },
    show: {
      y: "0px",
      opacity: 1,
      transition: { duration: 0.5, type: "tween" },
    },
  };
  return (
    <AnimatePresence>
      <Section bg={data[state.activeSlide].bg_url}>
        {movedBelow ? (
          <Header isTransparent={false} />
        ) : (
          <Header isTransparent />
        )}

        {/* <Container src={data[state.activeSlide].bg_url} alt="heroImage" /> */}
        <Wrapper>
          <InfoWrapper
            key={data[state.activeSlide].id}
            variants={variants}
            initial="hidden"
            animate="show"
          >
            <Title variants={item}>{data[state.activeSlide].name}</Title>
            <Info variants={item}>{data[state.activeSlide].description}</Info>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<Icon>send</Icon>}
            >
              Explore
            </Button>
          </InfoWrapper>
          <Slider
            setState={setState}
            items={data}
            activeSlide={state.activeSlide}
          />
        </Wrapper>
      </Section>
    </AnimatePresence>
  );
};

export default HeroComponent;

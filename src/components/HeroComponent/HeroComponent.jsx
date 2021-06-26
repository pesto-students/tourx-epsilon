/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { Button, useMediaQuery } from "@material-ui/core";
import Slider from "../Slider/Slider";
import { InfoWrapper, Info, Title, Wrapper, Section } from "./Style";
import Header from "../Header/Header";
import {
  addToFavourait,
  fetchPopularPlaces,
} from "../../containers/Landing/component/CategorySection/action";

const HeroComponent = (props) => {
  const [state, setState] = useState({ oldSlide: 0, activeSlide: 0 });
  const [trending, setTrending] = useState([]);
  const [movedBelow, setMovedBelow] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const history = useHistory();
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setMovedBelow(true);
    } else {
      setMovedBelow(false);
    }
  };

  const { places, user, loading } = props;
  useEffect(() => {
    props.fetchPopularPlaces();
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  useEffect(() => {
    if (places?.length) {
      setTrending(places);
    }
  }, [places]);

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
      {!loading ? (
        <Section bg={trending[state.activeSlide]?.images[1]}>
          {movedBelow ? (
            <Header isTransparent={false} />
          ) : (
            <Header isTransparent />
          )}

          {/* <Container src={data[state.activeSlide]?.bg_url} alt="heroImage" /> */}
          <Wrapper>
            <InfoWrapper
              key={trending[state.activeSlide]?._id}
              variants={variants}
              initial="hidden"
              animate="show"
            >
              <Title variants={item}>
                {trending[state.activeSlide]?.subTitle}
              </Title>
              <Info variants={item}>
                {trending[state.activeSlide]?.description}
              </Info>
              <Button
                variant="contained"
                color="primary"
                size={isMobile ? "small" : "large"}
                endIcon={<Icon>send</Icon>}
                onClick={() =>
                  history.push(
                    `/places/${trending[state.activeSlide]?.title}/${
                      trending[state.activeSlide]?._id
                    }`
                  )
                }
              >
                Explore
              </Button>
            </InfoWrapper>
            <Slider
              setState={setState}
              items={trending}
              activeSlide={state.activeSlide}
              addToFavourait={props.addToFavourait}
              user={user}
            />
          </Wrapper>
        </Section>
      ) : (
        <div />
      )}
    </AnimatePresence>
  );
};

const mapStateToProps = (state) => ({
  places: state.places.popularPlaces,
  user: state.auth.user,
  loading: state.places.loading,
});

export default connect(mapStateToProps, { fetchPopularPlaces, addToFavourait })(
  HeroComponent
);

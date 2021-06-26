/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
import React, { useState } from "react";
import { connect } from "react-redux";
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
import { getMostViewed } from "../CategorySection/action";
import CardView from "../CardView/CardView";
import StyledLink from "../../../../components/StyledLink/StyledLink";

function MostViewed(props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTab = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  const { margin, padding, mostViewed } = props;

  React.useEffect(() => {
    props.getMostViewed();
  }, []);

  const [, setState] = useState({
    oldSlide: 0,
    activeSlide: 0,
  });
  let slide;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile || isTab ? 2 : isTablet ? 3 : 5,
    slidesToScroll: isMobile ? 2 : 5,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) =>
      setState({ oldSlide: current, activeSlide: next }),
    //  afterChange: (current) => setState({ activeSlide: current })
  };

  function SamplePrevArrow(sampleProps) {
    const { onClick, className, style } = sampleProps;
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
  function SampleNextArrow(nextProps) {
    const { onClick, className, style } = nextProps;
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
        {mostViewed.map((i) => {
          return (
            <StyledLink key={i._id} to={`/places/${i.title}/${i._id}`}>
              <Container>
                <InnerWrapper>
                  <CardView item={i} />
                </InnerWrapper>
              </Container>
            </StyledLink>
          );
        })}
      </Slider>
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  mostViewed: state.places.mostViewed,
});

export default connect(mapStateToProps, { getMostViewed })(MostViewed);

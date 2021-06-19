/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from "react";
import { Star, StarHalf, StarOutline } from "react-ionicons";
import { uuid } from "uuidv4";
import PropTypes from "prop-types";
import { Wrapper } from "./Style";

function StarRating({ rating, width, height, color }) {
  const [state, setState] = useState({
    full: 0,
    half: 0,
    empty: 5,
  });
  useEffect(() => {
    const abs = Math.trunc(rating);
    const decimal = 5 - rating;

    const full = abs;
    const half = decimal ? 1 : 0;
    const empty = full + half === 5 ? 0 : 5 - (full + half);
    setState({
      full,
      half,
      empty,
    });
  }, [rating]);
  return (
    <Wrapper>
      {state.full &&
        new Array(state.full).fill(0).map((_i) => {
          return (
            <Star color={color} width={width} height={height} key={uuid()} />
          );
        })}
      {state.half &&
        new Array(state.half).fill(0).map((i) => {
          return (
            <StarHalf
              color={color}
              width={width}
              height={height}
              key={uuid()}
            />
          );
        })}
      {state.empty &&
        new Array(state.empty).fill(0).map((i) => {
          return (
            <StarOutline
              color={color}
              width={width}
              height={height}
              key={uuid()}
            />
          );
        })}
    </Wrapper>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;

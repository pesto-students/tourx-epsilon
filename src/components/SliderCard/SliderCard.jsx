/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from "react";
import { HeartOutline } from "react-ionicons";
import { Container, Image, IconWrapper, Text, StarWrapper } from "./style";
import StarRating from "../StartRating/StarRating";

function SliderCard({ item, active }) {
  return (
    <Container active={active}>
      <StarWrapper>
        <Text>Kerala</Text>

        <StarRating rating={3.5} color="white" width="15px" height="15px" />
      </StarWrapper>
      <Image src={item.thumbnail_url} alt="image" />
      <IconWrapper>
        <HeartOutline color="white" width="25px" height="25px" />
      </IconWrapper>
    </Container>
  );
}

export default SliderCard;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from "react";
import { get } from "lodash";
import { Checkbox, FormControlLabel, Tooltip } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { Container, Image, IconWrapper, Text, StarWrapper } from "./style";
import StarRating from "../StartRating/StarRating";

function SliderCard({ item, active, addToFavourait, user }) {
  return (
    <Container active={active}>
      <StarWrapper>
        <Text>{item.title}</Text>

        <StarRating
          rating={item.rating}
          color="white"
          width="15px"
          height="15px"
        />
      </StarWrapper>
      <Image src={item.images[0]} alt="image" />
      <IconWrapper>
        <FormControlLabel
          control={
            <Checkbox
              icon={
                <FavoriteBorder
                  style={{ color: "white", height: "25px", width: "25px" }}
                />
              }
              onClick={() => addToFavourait(item._id)}
              checkedIcon={
                <Tooltip title="Already Added" aria-label="add">
                  <Favorite
                    style={{ color: "red", height: "25px", width: "25px" }}
                  />
                </Tooltip>
              }
              checked={get(user, "favouraits", []).includes(item._id)}
              disabled={get(user, "favouraits", []).includes(item._id)}
              name="checkedH"
            />
          }
        />
        {/* <HeartOutline
          color="red"
          width="25px"
          height="25px"
          onClick={() => addToFavourait(item._id)}
        /> */}
      </IconWrapper>
    </Container>
  );
}

export default SliderCard;

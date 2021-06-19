/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Avatar, Chip, Divider } from "@material-ui/core";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { Rating } from "@material-ui/lab";

import {
  Container,
  ImageContainer,
  DetailsContainer,
  Image,
  Title,
  CountContainer,
  CountView,
  HeaderTitle,
  SubTitle,
  WrapperContainer,
  HeaderContainer,
  ReviewContainer,
  RatingHeader,
  ReviewText,
  ChipContainer,
} from "./style";

export default function CategoryListingCard({ cardDetails }) {
  const handleClick = () => {};
  return (
    <WrapperContainer>
      <Container>
        <ImageContainer>
          <Image alt="no-img" src={cardDetails.img} />
        </ImageContainer>
        <DetailsContainer>
          <HeaderContainer>
            <div>
              <HeaderTitle>{cardDetails.title}</HeaderTitle>
              <SubTitle>{`${cardDetails.options} Star`}</SubTitle>
            </div>
            <YouTubeIcon style={{ color: "#999FAA", fontSize: "32px" }} />
          </HeaderContainer>
          <Title>
            Over 900,000 Hotels Worldwide. Book Now, Pay When You Stay. List
            Your Property. View Articles. Register Online. Sign Up For Deals.
          </Title>
          <CountContainer>
            <VisibilityIcon style={{ color: "#999FAA", fontSize: "16px" }} />
            <CountView>12345</CountView>
          </CountContainer>
          <ChipContainer>
            <Chip
              size="small"
              icon={<AcUnitIcon />}
              onClick={handleClick}
              label="AC"
            />
            <Chip
              size="small"
              icon={<DriveEtaIcon color="white" />}
              onClick={handleClick}
              label="Parking"
            />
            <Chip
              size="small"
              icon={<FreeBreakfastIcon />}
              onClick={handleClick}
              label="Breakfast"
            />
          </ChipContainer>
        </DetailsContainer>
        <Divider orientation="vertical" flexItem />
        <ReviewContainer>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <RatingHeader>Mr. J. Camaron</RatingHeader>
          <Rating name="read-only" value={4} readOnly />
          <ReviewText>
            This is the best hotels I have ever visit, thanks for the best
            services
          </ReviewText>
        </ReviewContainer>
      </Container>
    </WrapperContainer>
  );
}

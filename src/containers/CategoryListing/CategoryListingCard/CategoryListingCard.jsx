/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Avatar, Chip, Divider } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
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
          <Image alt="no-img" src={cardDetails.images[0]} />
        </ImageContainer>
        <DetailsContainer>
          <HeaderContainer>
            <div>
              <HeaderTitle>{cardDetails.title.split(",")[0]}</HeaderTitle>
              <SubTitle>{`${cardDetails.subTitle}`}</SubTitle>
            </div>
            <YouTubeIcon style={{ color: "#999FAA", fontSize: "32px" }} />
          </HeaderContainer>
          <Title>
            {cardDetails.options.length > 2
              ? `${cardDetails.description.slice(0, 100)}...`
              : `${cardDetails.description.slice(0, 150)}...`}
          </Title>
          <CountContainer>
            <VisibilityIcon style={{ color: "#999FAA", fontSize: "16px" }} />
            <CountView>{cardDetails.views}</CountView>
          </CountContainer>
          <ChipContainer>
            {cardDetails.options.map((option) => (
              <Chip
                key={option.title}
                size="small"
                icon={<AcUnitIcon />}
                onClick={handleClick}
                label={option.title}
                style={{ margin: "4px 0px" }}
              />
            ))}
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

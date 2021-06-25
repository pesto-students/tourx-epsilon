/* eslint-disable react/prop-types */
import { Tooltip } from "@material-ui/core";
import React from "react";
import StarRating from "../StartRating/StarRating";
import {
  ReviewCardWrap,
  Wrapper,
  TopSection,
  Date,
  RatingWrap,
  Rating,
  UserDetail,
  ImageWarp,
  Deatils,
  Img,
  ReviewsSection,
  RatingWrapper,
  Readmore,
} from "./Style";

function ReviewsCard(props) {
  const { review } = props;
  return (
    <ReviewCardWrap>
      <Wrapper>
        <TopSection>
          <Date>{review?.createdAt?.split("T")[0]}</Date>
          <RatingWrap>
            <Rating>Excellent</Rating>
            <RatingWrapper>
              <StarRating
                rating={review?.rating ?? 5}
                color="#C0980A"
                width="20px"
                height="20px"
              />
            </RatingWrapper>
          </RatingWrap>
        </TopSection>
        <UserDetail>
          <ImageWarp>
            <Img src={review?.imgUrl} alt="imgProfile" />
          </ImageWarp>
        </UserDetail>
        <div>
          <Deatils>{review?.username}</Deatils>
          <ReviewsSection>{`${review?.description.slice(
            0,
            200
          )}... `}</ReviewsSection>
          {review?.description?.length > 200 ? (
            <Tooltip
              title={review?.description}
              aria-label="description"
              style={{ fontSize: "14px" }}
            >
              <Readmore>Read more</Readmore>
            </Tooltip>
          ) : null}
        </div>
      </Wrapper>
    </ReviewCardWrap>
  );
}

export default ReviewsCard;

/* eslint-disable react/prop-types */
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
            <Img
              src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_300,q_auto,w_400/v1/filestore/euqkvteayahctk0onr7842oo3adx_profile_image.jpg"
              alt="imgProfile"
            />
          </ImageWarp>
          <Deatils>{review?.user?.email?.split("@")[0]}</Deatils>
        </UserDetail>
        <div>
          <ReviewsSection>{review?.description}</ReviewsSection>
        </div>
      </Wrapper>
    </ReviewCardWrap>
  );
}

export default ReviewsCard;

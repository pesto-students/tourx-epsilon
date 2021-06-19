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

function ReviewsCard() {
  return (
    <ReviewCardWrap>
      <Wrapper>
        <TopSection>
          <Date>25 May 2021</Date>
          <RatingWrap>
            <Rating>Excellent</Rating>
            <RatingWrapper>
              <StarRating
                rating={3.5}
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
          <Deatils>Marut Butt</Deatils>
        </UserDetail>
        <div>
          <ReviewsSection>
            Highly recommended! I booked for my stays at the Serai Resort and I
            can proudly say that my stays were worth the money. Thrillophilia
            helped
          </ReviewsSection>
        </div>
      </Wrapper>
    </ReviewCardWrap>
  );
}

export default ReviewsCard;

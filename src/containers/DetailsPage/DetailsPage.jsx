/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { LocationOnRounded, Favorite } from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "../../components/Header/Header";
import MostViewed from "../Landing/component/MostViewed/MostViewed";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ReviewsCard from "../../components/ReviewsCard/ReviewsCard";
import CommentBox from "../../components/CommentBox/CommentBox";
import {
  PageWrapper,
  InfoContainer,
  HeaderContainer,
  Title,
  Location,
  ReviewsContainer,
  Reviews,
  Ratings,
  OverviewTitle,
  OverviewDesc,
  HighlightsDesc,
  HighLightIcon,
  Wrapper,
  ReviewSection,
} from "./Style";
import { addReview, fetchPlaceDetails, fetchReviews } from "./action";

const DetailsPage = (props) => {
  const [state, setState] = useState({
    isOpen: false,
    index: 0,
  });

  const [rating, setRating] = useState(0);

  const params = useParams();

  const { activePlace, loading, isAuth, user } = props;

  useEffect(() => {
    props.fetchPlaceDetails(params.place_id);
    props.fetchReviews();
  }, [params.place_id]);

  const handleAddReview = async (text) => {
    const response = await props.addReview(
      params.place_id,
      text,
      rating,
      user._id,
      user.email
    );
    setRating(0);

    if (response.isSuccess) {
      props.fetchPlaceDetails(params.place_id);
    }
  };

  useEffect(() => {
    document.title = `${activePlace.title} | TOURX`;
  }, [activePlace]);

  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      {!state.isOpen && <Header isTransparent={false} />}
      {!loading ? (
        <ImageGallery
          data={activePlace?.images?.slice(0, 5) || []}
          setState={setState}
        />
      ) : null}
      {!loading ? (
        <PageWrapper>
          <InfoContainer>
            <HeaderContainer>
              <Title>{activePlace?.title}</Title>
              <Location>
                <LocationOnRounded
                  style={{ fontSize: isMobile ? "15px" : "20px" }}
                />
                Kerela
              </Location>
            </HeaderContainer>
            <ReviewsContainer>
              <Reviews>{activePlace?.totalReviews} Reviews</Reviews>
              <Ratings>
                <Favorite
                  color="red"
                  style={{
                    fontSize: isMobile ? "22px" : "22px",
                    colo: "red",
                    marginRight: "5px",
                  }}
                />
                {activePlace?.favourait}
              </Ratings>
            </ReviewsContainer>
            <div>
              <OverviewTitle>Overview</OverviewTitle>
              <OverviewDesc>{activePlace?.description}</OverviewDesc>
            </div>
            <div>
              <OverviewTitle>Highlights</OverviewTitle>
              {activePlace?.highlights?.map((item) => (
                <Wrapper key={item}>
                  <HighLightIcon color="#59A5FF" width="25px" height="25px" />
                  <HighlightsDesc>{item}</HighlightsDesc>
                </Wrapper>
              ))}
            </div>
          </InfoContainer>
          <OverviewTitle>Similar Spots</OverviewTitle>
          <MostViewed padding={false} margin={false} />
          <OverviewTitle>Reviews</OverviewTitle>
          <ReviewSection>
            <Grid container spacing={3}>
              {activePlace?.reviews?.slice(0, 6).map((review) => (
                <Grid key={review._id} item xs={12} lg={4} md={6} sm={12}>
                  <ReviewsCard review={review} />
                </Grid>
              ))}
            </Grid>
          </ReviewSection>
          <OverviewTitle>Write Review</OverviewTitle>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <CommentBox isAuth={isAuth} handleAddReview={handleAddReview} />
        </PageWrapper>
      ) : null}
      {state.isOpen && (
        <Lightbox
          mainSrc={activePlace?.images[state.index]}
          nextSrc={
            activePlace?.images[(state.index + 1) % activePlace.images.length]
          }
          prevSrc={
            activePlace.images[
              (state.index + activePlace?.images?.length - 1) %
                activePlace?.images?.length
            ]
          }
          onCloseRequest={() => setState({ isOpen: false, index: 0 })}
          onMovePrevRequest={() =>
            setState({
              ...state,
              index:
                (state.index + activePlace?.images?.length - 1) %
                activePlace?.images?.length,
            })
          }
          onMoveNextRequest={() =>
            setState({
              ...state,
              index: (state.index + 1) % activePlace.images.length,
            })
          }
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  activePlace: state.places.activePlace,
  loading: state.places.loading,
  reviews: state.places.reviews,
  isAuth: state.auth.isAuth,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  fetchPlaceDetails,
  fetchReviews,
  addReview,
})(DetailsPage);

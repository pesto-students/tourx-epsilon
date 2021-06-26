/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  BannerWrapper,
  CatagoryCard,
  ImageWrapper,
  SkeletonWrapper,
  Wrapper,
  InnerWrapper,
  Text,
  StyledButton,
  StyledLink,
  Banner,
  Header,
  BigHeader,
} from "./style";
import { fetchPopularCategory } from "./action";
import { Category } from "../../../WelcomeGuide/PickPreferences/PickPreferences.interface";

const CategorySection = (props: any) => {
  const { categories, loading, handleClickOpen } = props;

  useEffect(() => {
    props.fetchPopularCategory();
  }, []);

  <SkeletonWrapper>
    <Skeleton animation="wave" variant="circle" width={40} height={40} />
    <div>
      <Skeleton animation="wave" variant="circle" width={80} height={40} />
      <Skeleton animation="wave" variant="circle" width={80} height={40} />
    </div>
  </SkeletonWrapper>;

  return (
    <Wrapper>
      <BannerWrapper>
        <ImageWrapper>
          <LazyLoadImage
            alt={
              categories[0]?.title ??
              "https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?ssl=1"
            }
            src={
              categories[0]?.imageUrl ??
              "https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?ssl=1"
            }
            width="100%"
            height="100%"
            effect="blur"
          />
        </ImageWrapper>
        <Banner>
          <Header>Search in Popular Categories</Header>
          <BigHeader>TOURX</BigHeader>
          <Text>For best experience</Text>
        </Banner>
      </BannerWrapper>
      <InnerWrapper>
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((e) => <SkeletonWrapper key={e} />)
          : categories.slice(1, 9).map((category: Category) => (
              <CatagoryCard key={category._id} data-bg={category.imageUrl}>
                <StyledLink to={`/category/${category.title}/${category._id}`}>
                  <Text>{category.title}</Text>
                </StyledLink>
              </CatagoryCard>
            ))}
        <StyledButton type="button" onClick={handleClickOpen}>
          View All
        </StyledButton>
      </InnerWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.category.popularCategory,
  loading: state.category.loading,
});

export default connect(mapStateToProps, { fetchPopularCategory })(
  CategorySection
);

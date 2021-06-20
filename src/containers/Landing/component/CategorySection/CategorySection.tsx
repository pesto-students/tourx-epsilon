/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import {
  CatagoryCard,
  Image,
  ImageContainer,
  SkeletonWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./style";
import { fetchPopularCategory } from "./action";
import { Category } from "../../../WelcomeGuide/PickPreferences/PickPreferences.interface";
import StyledLink from "../../../../components/StyledLink/StyledLink";

const CategorySection = (props: any) => {
  const { categories, loading } = props;

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
      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <SkeletonWrapper>
              <Skeleton animation="wave" width="90px" height="90px" />
              <div>
                <Skeleton animation="wave" width="200px" height="40px" />
                <Skeleton animation="wave" width="200px" height="20px" />
              </div>
            </SkeletonWrapper>
          ))
        : categories.slice(0, 8).map((category: Category) => (
            <StyledLink to={`/category/${category.title}/${category._id}`}>
              <CatagoryCard className="active" key={category.title}>
                <ImageContainer>
                  <Image src={category.imageUrl ?? ""} />
                </ImageContainer>
                <div>
                  <Title>{category.title}</Title>
                  <SubTitle>{`${category.placesCount}+ Options`}</SubTitle>
                </div>
              </CatagoryCard>
            </StyledLink>
          ))}
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

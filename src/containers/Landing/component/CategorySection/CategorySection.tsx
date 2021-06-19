/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  CatagoryCard,
  Image,
  ImageContainer,
  SubTitle,
  Title,
  Wrapper,
} from "./style";
import { fetchPopularCategory } from "./action";
import { Category } from "../../../WelcomeGuide/PickPreferences/PickPreferences.interface";

const CategorySection = (props: any) => {
  const { categories } = props;

  useEffect(() => {
    props.fetchPopularCategory();
  }, [categories]);

  return (
    <Wrapper>
      {categories.slice(0, 9).map((category: Category) => (
        <CatagoryCard className="active" key={category.title}>
          <ImageContainer>
            <Image src={category.img ?? ""} />
          </ImageContainer>
          <div>
            <Title>{category.title}</Title>
            <SubTitle>{`${category.options}+ Options`}</SubTitle>
          </div>
        </CatagoryCard>
      ))}
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.category.popularCategory,
});

export default connect(mapStateToProps, { fetchPopularCategory })(
  CategorySection
);

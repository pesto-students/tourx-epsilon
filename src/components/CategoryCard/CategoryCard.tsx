import React from "react";
import {
  Container,
  HeaderContainer,
  Image,
  ImageContainer,
  SubTitle,
  Title,
} from "./style";
import CategoryCardProps from "./Category.interface";

const CategoryCard = (props: CategoryCardProps): JSX.Element => {
  const { title, image, description } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <HeaderContainer>
        <Title>{title}</Title>
        <SubTitle>{description}</SubTitle>
      </HeaderContainer>
    </Container>
  );
};

export default CategoryCard;

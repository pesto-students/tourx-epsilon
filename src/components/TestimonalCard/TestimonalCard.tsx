import React from "react";
import PropTypes from "prop-types";
import StarRating from "../StartRating/StarRating";
import {
  Conatiner,
  SectionLeft,
  Text,
  Name,
  SectionRight,
  Image,
} from "./Style";
import { TestinomialProps } from "./Testinomial.interface";

const TestimonalCard: React.FC<TestinomialProps> = ({ data }): JSX.Element => {
  return (
    <Conatiner>
      <SectionLeft>
        <Text>{data.review}</Text>
        <Name>{data.name}</Name>
        <StarRating rating={3.5} color="#C0980A" width="15px" height="15px" />
      </SectionLeft>
      <SectionRight>
        <Image src={data.img} alt="avatar_image" />
      </SectionRight>
    </Conatiner>
  );
};

TestimonalCard.propTypes = {
  data: PropTypes.shape({
    review: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonalCard;

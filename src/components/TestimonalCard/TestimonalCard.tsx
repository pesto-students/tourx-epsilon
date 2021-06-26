import React from "react";
import PropTypes from "prop-types";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
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
import { getRandomColor } from "../../Library/helper";

const TestimonalCard: React.FC<TestinomialProps> = ({ data }): JSX.Element => {
  return (
    <Conatiner>
      <SectionLeft>
        <FormatQuoteIcon
          style={{
            transform: "rotate(180deg)",
            fontSize: "48px",
            color: getRandomColor(),
          }}
        />
        <Text>{data.review}</Text>
        <Name>{data.authorName}</Name>
        <StarRating
          rating={data.rating}
          color="#C0980A"
          width="15px"
          height="15px"
        />
      </SectionLeft>
      <SectionRight>
        <Image src={data.avatarUrl} alt="avatar_image" />
      </SectionRight>
    </Conatiner>
  );
};

TestimonalCard.propTypes = {
  data: PropTypes.shape({
    review: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonalCard;

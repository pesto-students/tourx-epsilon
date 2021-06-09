/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { uuid } from "uuidv4";
import avatar from "../../../../static/images/taras-shypka-QEgHL8NN7nM-unsplash.jpeg";
import TestimonalCard from "../../../../components/TestimonalCard/TestimonalCard";
import { Container } from "./Style";

function TestimonalSection() {
  return (
    <Container>
      {data.map((item) => {
        return <TestimonalCard data={item} key={uuid()} />;
      })}
    </Container>
  );
}

export default TestimonalSection;

const data = [
  {
    review:
      "TourX is such a app which makes our life easy when it come to new cities",
    name: "Jason P",
    rating: 4.5,
    img: avatar,
  },
  {
    review:
      "TourX is such a app which makes our life easy when it come to new cities",
    name: "Jason P",
    rating: 4.5,
    img: avatar,
  },
  {
    review:
      "TourX is such a app which makes our life easy when it come to new cities",
    name: "Jason P",
    rating: 4.5,
    img: avatar,
  },
  {
    review:
      "TourX is such a app which makes our life easy when it come to new cities",
    name: "Jason P",
    rating: 4.5,
    img: avatar,
  },
  {
    review:
      "TourX is such a app which makes our life easy when it come to new cities",
    name: "Jason P",
    rating: 4.5,
    img: avatar,
  },
  {
    review:
      "TourX is such a app which makes our life easy when it come to new cities",
    name: "Jason P",
    rating: 4.5,
    img: avatar,
  },
  {
    review:
      "TourX is such a app which makes our life easy when it come to new cities",
    name: "Jason P",
    rating: 4.5,
    img: avatar,
  },
];

/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../utils/test-utils";
import TestimonalCard from "../../components/TestimonalCard/TestimonalCard";

describe("components/Testimonal Cardu", () => {
  const data = {
    review: "Sample Review",
    name: "Kerela",
    rating: 3.5,
    img: "http://image.png",
  };
  it("should be rendered properly", () => {
    const { asFragment } = render(<TestimonalCard data={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

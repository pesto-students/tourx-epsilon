/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../utils/test-utils";
import ReviewsCard from "../../components/ReviewsCard/ReviewsCard";

describe("components/ReviewsCard", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(<ReviewsCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});

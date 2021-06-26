/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../utils/test-utils";
import StarRating from "../../components/StartRating/StarRating";

describe("components/StarRating", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(
      <StarRating rating={3.5} color="#C0980A" width="15px" height="15px" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

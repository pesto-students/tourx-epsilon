/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../utils/test-utils";
import SliderCard from "../../components/SliderCard/SliderCard";

describe("components/SliderCard", () => {
  const data = {
    thumbnail_url:
      "Cuddled up cosily amidst the serene beauty of Auli, Blue Poppy Resort will greet you with open arms, no matter in which season you are embracing this beautiful stay. You will witness, mesmerising snow slopes in winters, in summers, behold clear peaks and in monsoon season witness the clouds coming down to hug your worries away. This beauty resides in Auli owing most of its beauty to nature around. Made from alpine woods, the scent in the rooms here is so rare and precious that it will make your stay amazing and truly memorable.",
  };
  it("should be rendered properly", () => {
    const { asFragment } = render(
      <SliderCard active={false} item={data.thumbnail_url} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

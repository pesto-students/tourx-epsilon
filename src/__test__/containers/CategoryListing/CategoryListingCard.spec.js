/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../../utils/test-utils";
import CategoryListingCard from "../../../containers/CategoryListing/CategoryListingCard/CategoryListingCard";

describe("container/CategoryListings/CategoryListingCard", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(
      <CategoryListingCard
        cardDetails={{
          id: 1,
          title: "Hotels",
          options: "1200",
          slug: "hotels",
          img: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

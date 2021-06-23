/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { render } from "@testing-library/react";
import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";

describe("components/categoryCard", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(
      <CategoryCard
        image="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.5,f_auto,fl_progressive.strip_profile,g_center,h_183,q_auto,w_245/v1/filestore/ivniu6zyafkwdxaggg7jl7msro47_27023582_1061778550630758_383729866060832850_o.jpg"
        title="Hotel"
        description="Sample description"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

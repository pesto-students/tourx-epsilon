/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../utils/test-utils";
import StrikedText from "../../components/StrikedText/StrikedText";

describe("components/StrikedText", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(<StrikedText text="sample text" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

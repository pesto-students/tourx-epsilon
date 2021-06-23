/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../utils/test-utils";
import Input from "../../components/Input/Input";

describe("components/Input", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});

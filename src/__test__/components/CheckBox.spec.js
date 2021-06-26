import React from "react";
import { render } from "@testing-library/react";
import StyledCheckbox from "../../components/Checkbox/Checkbox";

describe("components/checkBox", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(<StyledCheckbox />);
    expect(asFragment()).toMatchSnapshot();
  });
});

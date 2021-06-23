/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../utils/test-utils";
import SelectBox from "../../components/SelectBox/SelectBox";

describe("components/SelectBox", () => {
  const props = {
    type: "input",
    placeholder: "Please Select State",
  };
  it("should be rendered properly", () => {
    const { asFragment } = render(
      <SelectBox
        type={props.type}
        placeholder={props.placeholder}
        options={[]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

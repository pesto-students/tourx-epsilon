/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "../../utils/test-utils";
import Stepper from "../../components/Stepper/Stepper";
import PickLocation from "../../containers/WelcomeGuide/PickLocation/PickLocation";
import PickPreferences from "../../containers/WelcomeGuide/PickPreferences/PickPreferences";

describe("components/Stepper", () => {
  const titleList = [
    {
      index: 1,
      title: "Please Select Location",
      description: "Select location",
    },
    {
      index: 2,
      title: "Please Select Preferences",
      description: "Select Preferences",
    },
  ];
  it("should be rendered properly", () => {
    const { asFragment } = render(
      <Stepper initial={0} titleList={titleList}>
        <PickLocation />
        <PickPreferences />
      </Stepper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

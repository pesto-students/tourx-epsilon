/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { MemoryRouter } from "react-router";
import { render } from "../../utils/test-utils";
import StyledLink from "../../components/StyledLink/StyledLink";

describe("components/StyledLink", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={[`/`]}>
        <StyledLink to="/">Sample Link</StyledLink>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

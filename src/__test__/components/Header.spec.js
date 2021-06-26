/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { MemoryRouter, Route } from "react-router";
import { render, cleanup } from "../../utils/test-utils";
import Header from "../../components/Header/Header";

describe("components/Header", () => {
  afterEach(cleanup);
  it("should be rendered properly", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={[`/`]}>
        <Route path="/">
          <Header isTransparent={false} elevation="none" />
        </Route>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

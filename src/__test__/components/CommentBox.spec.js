import React from "react";
import { render } from "@testing-library/react";
import CommentBox from "../../components/CommentBox/CommentBox";

describe("components/commentBox", () => {
  it("should be rendered properly", () => {
    const { asFragment } = render(<CommentBox />);
    expect(asFragment()).toMatchSnapshot();
  });
});

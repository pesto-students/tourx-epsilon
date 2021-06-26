/* eslint-disable react/prop-types */
import React from "react";
import SendIcon from "@material-ui/icons/Send";

import { TextAreaSection, Wrapper, ActionSection, ErrorSpan } from "./Style";

const CommentBox = (props) => {
  const { isAuth, handleAddReview } = props;
  const [state, setstate] = React.useState("");
  return (
    <Wrapper>
      <TextAreaSection
        aria-label="minimum height"
        rowsMin={3}
        placeholder="Enter comments"
        disabled={!isAuth}
        value={state}
        onChange={(e) => setstate(e.target.value)}
      />
      <ErrorSpan>
        {!isAuth ? "Please Login First to add the Review" : ""}
      </ErrorSpan>
      <ActionSection>
        <SendIcon
          style={{ cursor: "pointer" }}
          color="primary"
          onClick={() => {
            handleAddReview(state);
            setstate("");
          }}
        />
      </ActionSection>
    </Wrapper>
  );
};

export default CommentBox;

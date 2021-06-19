import React from "react";
import SendIcon from "@material-ui/icons/Send";

import { TextAreaSection, Wrapper, ActionSection } from "./Style";

const CommentBox = () => {
  return (
    <Wrapper>
      <TextAreaSection
        aria-label="minimum height"
        rowsMin={3}
        placeholder="Enter comments"
      />
      <ActionSection>
        <SendIcon color="primary" />
      </ActionSection>
    </Wrapper>
  );
};

export default CommentBox;

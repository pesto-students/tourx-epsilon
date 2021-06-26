import styled from "styled-components";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export const TextAreaSection = styled(TextareaAutosize)`
  border: none;
  overflow: auto;
  outline: none;
  width: 100%;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`;
export const Wrapper = styled.div`
  width: 80%;
  margin: 20px 0px;
  padding: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ActionSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const ErrorSpan = styled.div`
  font-size: 18px;
  color: red;
`;

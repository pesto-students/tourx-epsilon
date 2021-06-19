import styled from "styled-components";

export interface InputProps {
  ["data-icon"]: string | undefined;
}

export default styled.input`
  padding: 24px;
  padding-left: 64px;
  width: 100%;
  border: 1px solid #f2f4f8;
  color: black;
  outline: none;
  border-radius: 10px;
  ${(props: InputProps) =>
    props["data-icon"] &&
    `background: url("${props["data-icon"]}")
    no-repeat scroll 17px 20px;`}

  background-size: 28px;
  background-color: #f2f4f8;
  ::placeholder {
    color: #cfd0d7;
    font-size: 14px;
  }

  :focus {
    transition: all 0.1s;
    border: 2px solid #d5d8dc;
  }
`;

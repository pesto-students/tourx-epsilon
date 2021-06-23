import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Container = styled.div`
  margin: 0.5rem 0.75rem;
  position: relative;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 0.75rem 0.75rem;
  padding-right: 2.5rem;
  width: 100%;
  border: 1px solid #cfd0d7;
  color: black;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  ::placeholder {
    color: #cfd0d7;
    font-size: 14px;
  }
  :focus {
    transition: all 0.1s;
    border: 2px solid #d5d8dc;
  }
`;

export const Droplist = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  background: white;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
`;

export const Options = styled.div`
  padding: 0.75rem 0.75rem;
  width: 100%;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background: #f2f4f4;
  }
  z-index: 5;
`;

export const DropArrow = styled(ExpandMoreIcon)`
  position: absolute;
  top: 20%;
  right: 3%;
`;

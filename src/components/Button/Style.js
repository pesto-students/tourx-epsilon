import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const ButtonWrapper = styled.div`
  width: fit-content;
  padding: 10px 15px;
  border-radius: 5px;
  background: ${(props) => props.color};
  border: ${(props) => (props.type === "outline" ? "1px solid white" : "none")};
  z-index: 100;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
`;

export const IconItem = styled.div`
  margin-left: 8px;
`;

export const Label = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.size};
`;

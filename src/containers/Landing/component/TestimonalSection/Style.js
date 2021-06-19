import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "20px 90px")};
  @media screen and (max-width: 540px) {
    padding: 20px 30px;
  }
`;

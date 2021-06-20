import styled from "styled-components";

export const Container = styled.div`
  background-color: #eff0f3;
  margin-top: 5rem;
  padding: ${(props) => (props.padding ? props.padding : "20px 80px")};
  padding-bottom: 5rem;
  @media screen and (max-width: 540px) {
    padding: 20px 30px;
  }
`;

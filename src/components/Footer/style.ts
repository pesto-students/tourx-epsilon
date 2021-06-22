import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2e343d;
  padding: 0rem 2rem;
`;

export const Wrapper = styled.div`
  width: 1080px;
`;

export const StyledHR = styled.hr`
  color: white;
  width: 45%;
  margin: 0px 1rem;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & h2 {
    color: white;
    font-size: 2rem;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #b7b7b7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 1rem;
`;

export const P = styled.p`
  color: #b7b7b7;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin-top: 3rem;
`;

export const Span = styled.p`
  color: #b7b7b7;
  margin-top: 2rem;
  font-size: 12px;
  width: 100%;
  text-align: center;
`;

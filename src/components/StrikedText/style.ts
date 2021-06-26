import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0rem;
`;

export const Span = styled.span`
  font-size: ${(props) => props.theme.fonts.textFade.size};
  color: ${(props) => props.theme.fonts.textFade.color};
  margin: 0rem 0.75rem;
`;

export const StyledHr = styled.hr`
  height: 1px;
  background: ${(props) => props.theme.fonts.textFade.color};
  border-radius: 10px;
  border: none;
  width: 100%;
`;

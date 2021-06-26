import { Checkbox } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: flex-start;
  align-items: start;
  margin-top: 24px;
`;

export const Header = styled.div`
  font-size: ${(props) => props.theme.fonts.header.size};
  font-weight: ${(props) => props.theme.fonts.header.weight};
  line-height: ${(props) => props.theme.fonts.header.lineHeight};
  margin: 0px;
`;

export const SubHeader = styled.div`
  font-size: ${(props) => props.theme.fonts.textFade.size};
  color: ${(props) => props.theme.fonts.textFade.color};
  margin: 0.5rem 0rem;
`;

export const InputContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

export const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #6f7482, 100%;
  margin: 0.5rem 0rem;
`;

export const LabelContainer = styled.div`
  margin: 1.5rem 0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.fonts.textFade.size};
  color: ${(props) => props.theme.fonts.textFade.color};
  margin-left: 8px;
`;

export const Button = styled.button`
  background: black;
  color: white;
  border: none;
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  padding: 14px 24px;
  display: inline;
  margin: 0.75rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledCheckBox = styled(Checkbox)`
  color: black !important;
  background-color: black;
`;

export const ButtonWrapper = styled.div`
  margin: 2rem 0rem;
  width: 100%;
`;

export const StyledText = styled.p`
  color: black;
  text-decoration: underline;
  font-size: 14px;
  margin: 1.5rem 1rem;
  cursor: pointer;
  text-align: left;
`;

/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}
body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
`;

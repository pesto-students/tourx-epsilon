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
    a:link{
      text-decoration: none;
    }
  }
  .MuiCheckbox-root { 
    color: rgba(0, 0, 0, 1) !important;
  }
  .MuiChip-root {
    background: rgba(0, 0, 0, 0.7) !important;
    color: rgba(255, 255, 255, 0.9) !important;
    padding: .5rem 0rem !important;
  }

  .MuiChip-root  .MuiChip-icon {
    color: rgba(255, 255, 255, 0.9) !important;
  }

  .filter_button {
    position: fixed !important;
    bottom: 24px;
    right : 24px;
    display: none !important;
    backgroud: black !important;
  }

  @media screen and (max-width: 768px) {
    .MuiFab-primary {
      background-color: black !important;
    }
    .filter_button {
      display: block !important;
    }
  }

`;

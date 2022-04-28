import { createGlobalStyle } from "styled-components";
import pxToRem from "./pxToRem";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    :root{
        --font: 'Nunito', sans-serif;

        /*Login*/
        /*Fontes*/
        --font-login-header: normal normal 800  ${pxToRem(24)}/${pxToRem(
  32.74
)} var(--font);      
    }
`;

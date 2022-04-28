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
  33
)} var(--font);   
        --font-login-section-h1: normal normal 400 ${pxToRem(48)}/${pxToRem(
  65.47
)} var(--font);
        --font-login-section-h1-span: normal normal 900 ${pxToRem(
          50
        )}/${pxToRem(68.2)} var(--font);
        --font-login-section-h3: normal normal 600 ${pxToRem(28)}/${pxToRem(
  38.19
)} var(--font);
        --font-login-section-h3-span: normal normal 900 ${pxToRem(
          28
        )}/${pxToRem(38.19)} var(--font);
        --font-login-buttons: normal normal 800 ${pxToRem(32)}/${pxToRem(
  44
)} var(--font);
        --font-login-form-h1: normal normal 300 ${pxToRem(48)}/${pxToRem(
  65.47
)} var(--font);
        --font-login-form-p: normal normal 300 ${pxToRem(24)}/${pxToRem(
  32.74
)} var(--font);
        --font-login-form-input: normal normal 300 ${pxToRem(16)}/${pxToRem(
  32.74
)} var(--font);
        --font-login-form-label: normal normal 300 ${pxToRem(32)}/${pxToRem(
  43.65
)} var(--font);
        --font-login-form-submit: normal normal 700 ${pxToRem(32)}/${pxToRem(
  43.65
)} var(--font);

        /*Cor da fonte */
        --font-color-login-header: #fff;

        /*Background*/
        --background-login-header: #020905;
        --background-login-buttons: #00C041;
        --background-login-form: #E6E6E6;
    }
`;

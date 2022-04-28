import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Loginn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  p {
    font: var(--font-login-header);
  }

  section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    background-repeat: no-repeat;
    background: rgba(0, 0, 0, 0.5) url(assets/fundo.svg);
    background-size: cover;
    background-position: center;
    height: ${pixelToRem(988)};
    background-blend-mode: darken;

    .apresentacao {
      margin-top: ${pixelToRem(249)};
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font: var(--font-login-section-h1);
        width: 50%;
        text-align: center;
        color: var(--font-color-login-header);
        padding-bottom: ${pixelToRem(26)};

        span {
          font: var(--font-login-section-h1-span);
        }
      }
      hr {
        width: 50%;
        border: ${pixelToRem(6)} solid var(--background-login-buttons);
        border-radius: ${pixelToRem(10)};
      }
      h3 {
        font: var(--font-login-section-h3);
        color: var(--font-color-login-header);
        width: 35%;
        text-align: center;
        margin: ${pixelToRem(34)} 0;

        span {
          font: var(--font-login-section-h3-span);
        }
      }
      button {
        background: var(--background-login-buttons);
        border: none;
        width: 20%;
        height: ${pixelToRem(72)};
        border-radius: ${pixelToRem(50)};
        font: var(--font-login-buttons);
        color: var(--font-color-login-header);
      }
    }
  }
`;

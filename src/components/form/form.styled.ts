import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${pixelToRem(1080)};

  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 36, 12, 0.1) 100%
    ),
    radial-gradient(50% 50% at 50% 50%, #00240c 0%, #020905 86.74%);
  padding: ${pixelToRem(203)} 0;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pixelToRem(26)};
    h1 {
      font: var(--font-login-form-h1);
      color: var(--font-color-login-header);
    }
    p {
      font: var(--font-login-form-p);
      color: var(--font-color-login-header);
      margin-bottom: ${pixelToRem(44)};
    }
  }
  .nome {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 76%;
    justify-content: space-between;
    margin-bottom: ${pixelToRem(40)};

    div {
      display: flex;
      flex-direction: column;
      width: 48%;
      input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 2px solid var(--font-color-login-header);
        padding: 6px 5px;
        color: var(--font-color-login-header);
        font: var(--font-login-form-input);
        &::placeholder {
          color: var(--font-color-login-header);
        }
      }
      label {
        font: var(--font-login-form-label);
        color: var(--font-color-login-header);
      }
    }
  }
  .dados {
    display: flex;
    flex-direction: column;
    width: 76%;
    gap: ${pixelToRem(40)};
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 2px solid var(--font-color-login-header);
        padding: 6px 5px;
        color: var(--font-color-login-header);
        font: var(--font-login-form-input);
        &::placeholder {
          color: var(--font-color-login-header);
        }
      }
      label {
        font: var(--font-login-form-label);
        color: var(--font-color-login-header);
      }
    }
  }

  input[type="submit"] {
    background: var(--background-login-form);
    width: 30%;
    font: var(--font-login-form-submit);
    border: none;
    margin-top: ${pixelToRem(75)};
    border-radius: ${pixelToRem(50)};
    height: ${pixelToRem(72)};
  }
`;

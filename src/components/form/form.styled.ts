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
    justify-content: center;
    width: 76%;
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

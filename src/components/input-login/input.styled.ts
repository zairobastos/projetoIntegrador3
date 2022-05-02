import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 76%;
  justify-content: space-between;
  margin-bottom: ${pixelToRem(40)};
  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font: var(--font-login-form-label);
      color: var(--font-color-login-header);
    }
  }
`;

export const Campo = styled.input`
  width: ${(props) => props.width}%;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--font-color-login-header);
  padding: 6px 5px;
  color: var(--font-color-login-header);
  font: var(--font-login-form-input);
  &::placeholder {
    color: var(--font-color-login-header);
  }
`;

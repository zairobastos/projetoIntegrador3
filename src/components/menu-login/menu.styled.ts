import styled from "styled-components";
import pxToRem from "../../config/pxToRem";

export const Menur = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: var(--background-login-header);
  height: ${pxToRem(92)};
  color: var(--font-color-login-header);
  justify-content: flex-end;
  align-items: center;
  gap: ${pxToRem(23)};
  padding: 0 ${pxToRem(42)};

  .cadastre {
    background-color: var(--background-login-buttons);
    width: ${pxToRem(288)};
    height: ${pxToRem(49)};
    border-radius: ${pxToRem(50)};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

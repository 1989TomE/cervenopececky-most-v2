import styled, { css } from "styled-components";

export default css`
  div {
    background-color: ${(props) => props.theme.colors.ocher};
    color: blue;
    font-size: 20px;

    > div {
      color: red;
    }
  }
`;

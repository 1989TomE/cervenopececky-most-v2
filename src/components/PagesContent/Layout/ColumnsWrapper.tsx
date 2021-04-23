import { tableMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: flex;

  ${tableMediaQuery} {
    flex-direction: column;
  }
`;

export default ColumnsWrapper;

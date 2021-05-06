import { tabletMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: flex;

  ${tabletMediaQuery} {
    flex-direction: column;
  }
`;

export default ColumnsWrapper;

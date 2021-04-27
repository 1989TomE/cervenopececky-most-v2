import { Column, ColumnsWrapper } from "@src/components/PagesContent/Layout";
import { Header, Paragraph } from "@src/components/TextContent";
import { tableMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";
import StyledMap from "./StyledMap";

const Content = () => {
  return (
    <Wrapper>
      <Header title="Výroba moštu" marginTop="0rem" />
      <Paragraph bold>Tomáš Adamec</Paragraph>
      <Paragraph paddingTop="0.5rem">
        +420 604 402 763 / info@cervenopececkymost.cz
      </Paragraph>

      <Header title="Sadařství" />
      <Paragraph bold>Jiří Adamec st</Paragraph>
      <Paragraph paddingTop="0.5rem">
        +420 731 171 256 / info@cervenopececkymost.cz
      </Paragraph>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  > .openingWrapper {
    display: flex;
  }
`;

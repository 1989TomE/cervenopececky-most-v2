import { Header, Paragraph } from "@src/components/TextContent";
import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      <Header title="Výroba moštu" marginTop="0rem" />
      <Paragraph bold>Tomáš Adamec</Paragraph>
      <Paragraph>+420 604 402 763 / info@cervenopececkymost.cz</Paragraph>

      <Header title="Sadařství" marginTop={"20px"} />
      <Paragraph bold>Jiří Adamec st</Paragraph>
      <Paragraph>+420 731 171 256 / info@cervenopececkymost.cz</Paragraph>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  > .openingWrapper {
    display: flex;
  }
`;

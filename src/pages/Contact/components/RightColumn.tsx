import { Header, Paragraph } from "@src/components/TextContent";
import Widget from "@src/components/TextContent/Widget";
import StyledMap from "./StyledMap";

const Content = () => {
  return (
    <Widget height={"175px"}>
      <Header primary title="Fakturace" marginTop="0rem" />
      <Paragraph bold>Tomáš Adamec</Paragraph>
      <Paragraph>IČO: 06215718</Paragraph>
      <Paragraph>Sídlo: Školní 196, Červené Pečky 28121</Paragraph>
      <Paragraph>Provozovna: Amálka 72, Červené Pečky 28121</Paragraph>
    </Widget>
  );
};

export default Content;

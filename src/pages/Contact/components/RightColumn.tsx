import { Header, Paragraph } from "@src/components/TextContent";
import ContactWidget from "./ContactWidget";
import styled from "styled-components";

const RightColumn = () => {
  return (
    <ContactWidget>
      <Header primary title="Fakturace" marginTop="0rem" />
      <ContactLine bold>Tomáš Adamec, IČO: 06215718</ContactLine>
      <ContactLine>Sídlo: Školní 196, Červené Pečky 28121</ContactLine>
      <ContactLine>Provozovna: Amálka 72, Červené Pečky 28121</ContactLine>
    </ContactWidget>
  );
};

export default RightColumn;

const ContactLine = styled(Paragraph)`
  text-align: left;
  width: 100%;
`;

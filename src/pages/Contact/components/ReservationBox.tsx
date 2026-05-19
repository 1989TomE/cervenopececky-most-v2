import { Header, Paragraph } from "@src/components/TextContent";
import Widget from "@src/components/TextContent/Widget";
import styled from "styled-components";

const ReservationBox = () => {
  return (
    <CenteredWidget>
      <Header primary title="REZERVACE" marginTop="0rem" />
      <Paragraph bold>MOŠTOVÁNÍ PRO VEŘEJNOST</Paragraph>
      <Paragraph>+420 604 402 763</Paragraph>
      <Paragraph>rezervace@cervenopececkymost.cz</Paragraph>
    </CenteredWidget>
  );
};

export default ReservationBox;

const CenteredWidget = styled(Widget)`
  width: 100%;
  align-items: center;
  text-align: center;
  border: none;
  outline: none;
  box-shadow: none;

  > * {
    width: 100%;
    text-align: center;
  }
`;

import { Header, Paragraph } from "@src/components/TextContent";
import styled from "styled-components";

export const FIRST_P_HEIGHT = "80px";

const Content = () => {
  return (
    <Wrapper>
      <Header title="Celoroční prodej" />
      <Paragraph bold>Amálka 72, Červené Pečky</Paragraph>
      <Paragraph height={FIRST_P_HEIGHT}>
        Mimo otevírací dobu moštárny (podzim/jaro) lze zakoupit produkty
        celoročně, a to vždy po telefonické či emailové domluvě.
      </Paragraph>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div``;

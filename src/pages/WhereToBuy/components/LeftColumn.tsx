import { Column } from "@src/components/PagesContent/Layout";
import { Header, Paragraph } from "@src/components/TextContent";
import styled from "styled-components";
import { FIRST_P_HEIGHT } from "./RightColumn";
import mostarnaMap from "@root/assets/mostarnaMapa.png";

const Content = () => {
  return (
    <>
      <Header title="Podzimní / jarní prodej v moštárně" />
      <Paragraph bold>Amálka 72, Červené Pečky</Paragraph>
      <Paragraph height={FIRST_P_HEIGHT}>
        V moštárně lze do vyprodání zásob zakoupit jablka, sušené ovoce, čerstvý
        i pasterizovaný mošt. Během letní a podzimní sezóny si u nás také můžete
        nechat zmoštovat své ovoce (dle domluvy +420&nbsp;604&nbsp;402&nbsp;763
        nebo info@cervenopececkymost.cz).
      </Paragraph>

      <div className="openingWrapper">
        <Column>
          <Paragraph bold primaryColor>
            14. září – 30. listopadu 2024
          </Paragraph>
          <Paragraph>Pátek 15-18h</Paragraph>
          <Paragraph>Sobota 9-16h</Paragraph>
        </Column>

        <Column>
          <Paragraph bold primaryColor>
            Jaro 2025
          </Paragraph>
          <Paragraph>Bude upřesněno</Paragraph>
        </Column>
      </div>

      <a
        href="https://mapy.cz/zakladni?x=15.2040071&y=49.9814219&z=17&q=mo%C5%A1t%C3%A1rna%20%C4%8Derven%C3%A9%20pe%C4%8Dky&source=firm&id=13328234"
        target="_blank"
      >
        <StyledImage src={mostarnaMap} className="mapImage" />
      </a>
    </>
  );
};

export default Content;

export const StyledImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

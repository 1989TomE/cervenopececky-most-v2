import { Column } from "@src/components/PagesContent/Layout";
import { Header, Paragraph } from "@src/components/TextContent";
import styled from "styled-components";
import { FIRST_P_HEIGHT } from "./RightColumn";
import mostarnaMap from "@root/assets/mostarnaMapa.png";

const Content = () => {
  return (
    <>
      <Header title="Podzimní / jarní prodej moštárna" />
      <Paragraph bold>Amálka 72, Červené Pečky</Paragraph>
      <Paragraph height={FIRST_P_HEIGHT}>
        V moštárně lze do vyprodání zásob zakoupit jablka, sušené ovoce, čerstvý
        i pasterizovaný mošt. Během letní a podzimní sezóny si u nás také můžete
        nechat zmoštovat své ovoce (dle domluvy +420&nbsp;604&nbsp;402&nbsp;763
        nebo rezervace@cervenopececkymost.cz).
      </Paragraph>

      <OpeningWrapper>
        <Column>
          <Paragraph bold primaryColor>
            Září - prosinec
          </Paragraph>
          <Paragraph>
            Začínáme dle sklizně ovoce (aktuálně vždy na FB nebo IG)
          </Paragraph>
        </Column>

        <Column>
          <Paragraph bold primaryColor>
            Březen-duben
          </Paragraph>
          <Paragraph>
            Začínáme dle počasí a skladových zásob (aktuálně vždy na FB nebo IG)
          </Paragraph>
        </Column>
      </OpeningWrapper>

      <a
        href="https://mapy.cz/zakladni?x=15.2040071&y=49.9814219&z=17&q=mo%C5%A1t%C3%A1rna%20%C4%8Cerven%C3%A9%20pe%C4%8Dky&source=firm&id=13328234"
        target="_blank"
        rel="noreferrer"
      >
        <StyledImage src={mostarnaMap} className="mapImage" alt="Mapa moštárny" />
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

const OpeningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

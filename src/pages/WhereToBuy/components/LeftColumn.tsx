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
        i pasterizovaný mošt. Celoročně si u nás také můžete nechat zmoštovat
        své ovoce (dle domluvy +420 604 402 763).
      </Paragraph>

      <div className="openingWrapper">
        <Column>
          <Paragraph bold primaryColor>
            17. září – 10. prosince 2022
          </Paragraph>
          <Paragraph bold>sobota 9–17 hod.</Paragraph>
        </Column>

        <Column>
          <Paragraph bold primaryColor>
            Duben 2022
          </Paragraph>
          <Paragraph bold>Sobota 9–14 hod.</Paragraph>
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

import { Header, Paragraph } from "@src/components/TextContent";
import styled from "styled-components";
import prodejMap from "@root/assets/celorocniprodejMapa.png";
import { StyledImage } from "./LeftColumn";
import { tabletMediaQuery } from "@src/styles/mediaQueries";

export const FIRST_P_HEIGHT = "60px";

const Content = () => {
  return (
    <Wrapper>
      <Header title="Celoroční prodej" />
      <Paragraph bold>Dr. Dvořáka 394, Červené Pečky</Paragraph>
      <Paragraph height={FIRST_P_HEIGHT}>
        Prodejní místo mimo otevírcí dobu moštárny. Do vyprodání zásob lze
        nakoupit jablka, sušené ovoce a pasterizovaný mošt.
      </Paragraph>

      <div className="openingWrapper">
        <Paragraph bold primaryColor>
          pondělí – pátek
        </Paragraph>
        <Paragraph>
          <span style={{ fontWeight: 700 }}>17–20 hod.</span> / nebo dle domluvy
          volejte +420 731 171 256
        </Paragraph>
      </div>
      <a href="https://mapy.cz/zakladni?vlastni-body&x=15.2042351&y=49.9739936&z=19&ut=Celoro%C4%8Dn%C3%AD%20prodej&uc=9iMsgxXOyj&ud=Dr.%20Dvo%C5%99%C3%A1ka%20394%2C%20%C4%8Cerven%C3%A9%20Pe%C4%8Dky%2C%20281%2021%2C%20Kol%C3%ADn">
        <StyledImage src={prodejMap} className="mapImage" />
      </a>
    </Wrapper>
  );
};

export default Content;

export const Wrapper = styled.div`
  > .openingWrapper {
    margin-top: 40px;

    ${tabletMediaQuery} {
      margin-top: 15px;
    }
  }
`;

import { Paragraph } from "@src/components/TextContent";
import {
  cellPhoneMediaQuery,
  tabletMediaQuery,
} from "@src/styles/mediaQueries";
import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      <div className="top">
        <Paragraph>
          Moštování pro veřejnost probíhá během podzimu, a to na základě
          telefonické dohody.
        </Paragraph>
        <Paragraph>
          Nabízíme výrobu jak čerstvého moštu, tak Vám mošt můžeme
          zpasterizovat. Čerstvý mošt lze stočit do Vámi přivezených nádob nebo
          poskytneme naše nádoby. Pasterizovaný mošt stáčíme pouze do našich bag
          in box sáčků.
        </Paragraph>
      </div>

      <div className="bottom">
        <Paragraph bold>
          Jak postupovat, když chci zmoštovat své ovoce?
        </Paragraph>

        <Paragraph>
          1. Zákazník zavolá a domluví se termín předání ovoce (většinou pátek
          před moštovacím víkendem).
        </Paragraph>

        <Paragraph>
          2. Zákazník zkontroluje ovoce, zda se zde nevyskytují nahnilé a
          zablácené kusy (případně přetřídí a omyje).
        </Paragraph>

        <Paragraph>
          3. Zákazník v domluvený termín přiveze zkontrolované ovoce do
          moštárny.
        </Paragraph>

        <Paragraph>
          4. Až bude ovoce zpracováno, tak zákazníka kontaktujeme, že si může
          mošt vyzvednout (zpravidla je mošt vyroben a připraven k vyzvednutí
          během víkendu, záleží na rozsahu objednávky).
        </Paragraph>
      </div>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  > .top {
    height: 180px;
    margin-bottom: 10px;

    ${tabletMediaQuery} {
      min-height: 120px;
      height: auto;
    }
  }
`;

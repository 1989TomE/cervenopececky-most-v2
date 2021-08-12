import { Paragraph } from "@src/components/TextContent";
import {
  cellPhoneMediaQuery,
  tabletMediaQuery,
} from "@src/styles/mediaQueries";
import styled from "styled-components";

const MARGIN_TOP = "0.5rem";

const Content = () => {
  return (
    <Wrapper>
      <div className="top">
        <Paragraph>
          Moštování pro veřejnost lze uskutečnit celoročně, a to na základě
          telefonické dohody.
        </Paragraph>
        <Paragraph>
          Nabízíme výrobu jak čerstvého moštu, tak Vám mošt můžeme
          zpasterizovat. Čerstvý mošt lze stočit do Vámi přivezených nádob nebo
          poskytneme naše nádoby. Pasterizovaný mošt stáčíme pouze do našich 3L
          bag in box sáčků.
        </Paragraph>
      </div>

      <div className="bottom">
        <Paragraph bold>
          Jak postupovat, když chci zmoštovat své ovoce?
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          1. Zákazník zavolá a domluví se termín předání ovoce a vyzvednutí
          moštu
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          2. Zákazník zkontroluje ovoce, zda se zde nevyskytují nahnilé a
          zablácené kusy (případně přetřídí a omyje)
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          3. Zákazník přiveze zkontrolované ovoce do moštárny
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          4. Zákazník si v domluveném termínu mošt vyzvedne
        </Paragraph>
      </div>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  > .top {
    height: 160px;
    margin-bottom: 10px;

    ${tabletMediaQuery} {
      min-height: 120px;
      height: auto;
    }
  }
`;

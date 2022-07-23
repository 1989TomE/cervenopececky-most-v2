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
          telefonické dohody. Moštujeme pro drobné zahrádkáře i ovocné podniky.
          Minimální množství dovezeného ovoce 30 kg.
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
          1. Ke každému zákazníkovi přistupujeme individuálně, a proto nám
          zavolejte nebo napište, abychom rezervovali čas, kdy se budeme věnovat
          právě Vám.
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          2. Domluvíme termín, kdy k nám do moštárny přivezete své ovoce. Záleží
          na Vás, může to být libovolný den v týdnu.
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          3. Ovoce zpracujeme vždy nejbližší sobotu. Mošt Vám vyrobíme čerstvý
          i pasterizovaný.
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          4. Hotový mošt budete mít připravený u nás v moštárně. Vyzvednete si,
          jak se Vám to bude hodit.
        </Paragraph>
        <Paragraph marginTop={MARGIN_TOP}>
          5. Pak si vychutnáte svou úrodu!{" "}
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

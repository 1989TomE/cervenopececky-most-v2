import { Paragraph } from "@src/components/TextContent";
import { tabletMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";

const MARGIN_TOP = "0.5rem";

const Content = () => {
  return (
    <Wrapper>
      <div className="top">
        <Paragraph>
          Moštování pro veřejnost lze uskutečnit během letní a podzimní sezóny,
          a to na základě telefonické nebo emailové dohody. Moštujeme pro drobné
          zahrádkáře i ovocné podniky. Minimální množství dovezeného ovoce ke
          zpracování je 30 kg.
        </Paragraph>
        <Paragraph>
          Nabízíme výrobu jak čerstvého moštu, tak Vám mošt můžeme
          zpasterizovat. Čerstvý mošt lze stočit do Vámi přivezených nádob nebo
          poskytneme naše nádoby. Pasterizovaný mošt stáčíme pouze do našich 3L
          bag in box sáčků.
        </Paragraph>
        <Paragraph>
          Kromě jablek Vám po domluvě můžeme zpracovat i jiné druhy
          ovoce/zeleniny či jejich dílčí část.
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
          na Vás, toto může být libovolný den v týdnu.
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          3. Ovoce následně zpracujeme vždy nejbližší výrobní den (pátek a
          sobota). Mošt Vám vyrobíme buď čerstvý, pasterizovaný nebo kombinaci
          dle Vašeho přání.
        </Paragraph>

        <Paragraph marginTop={MARGIN_TOP}>
          4. Pokud chcete pouze čerstvý mošt, toto dokážeme na počkání. Stačí
          dorazit v předem domluveném termínu ve výrobním dnu.
        </Paragraph>
        <Paragraph marginTop={MARGIN_TOP}>
          5. Pokud je požadavkem výroby i pasterizace, tak hotový mošt budete
          mít připravený u nás v moštárně. Vyzvednete si, jak se Vám to bude
          hodit.
        </Paragraph>
        <Paragraph marginTop={MARGIN_TOP}>
          6. Pak si vychutnáte svou úrodu!
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

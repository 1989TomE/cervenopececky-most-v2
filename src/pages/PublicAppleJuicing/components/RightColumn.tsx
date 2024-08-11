import { Header, Paragraph } from "@src/components/TextContent";
import Widget from "@src/components/TextContent/Widget";

const Content = () => {
  return (
    <>
      <Widget height={"160px"} marginBottom={"10px"}>
        <Header primary title="ČERSTVÝ MOŠT" marginTop="0rem" />
        <Paragraph bold primaryColor>
          Mošt 1L&nbsp;12 Kč
        </Paragraph>
        <Paragraph bold>/ + 8 Kč nádoba 1,5L /</Paragraph>
        <Paragraph smallFontSize>
          Celková cena za litr šťávy získané z Vašeho ovoce, které bylo
          přetříděno, omyto, drceno, lisováno a plněno do nádob. Cena včetně
          likvidace výlisků. Pokud máte vlastní nádobu, do které chcete mošt
          stočit, pak za nádobu nic neplatíte.
        </Paragraph>
      </Widget>

      <Widget height={"185px"}>
        <Header primary title="PASTERIZOVANÝ MOŠT" marginTop="0rem" />
        <Paragraph bold primaryColor>
          Mošt 3L &nbsp;70 Kč
        </Paragraph>
        <Paragraph bold>/ + 12 Kč kartonová krabice 3L /</Paragraph>
        <Paragraph smallFontSize>
          Celková cena za 3L pasterizované šťávy včetně obalu získané z Vašeho
          ovoce. Ovoce bylo přetříděno, omyto, drceno, lisováno, zpasterizováno
          a plněno do sáčku. Cena včetně likvidace výlisků. K sáčku lze zakoupit
          i kartonovou krabici, kterou můžete používat opakovaně.
        </Paragraph>
      </Widget>
    </>
  );
};

export default Content;

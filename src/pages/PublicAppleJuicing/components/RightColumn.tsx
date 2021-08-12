import { Header, Paragraph } from "@src/components/TextContent";
import Widget from "@src/components/TextContent/Widget";

const Content = () => {
  return (
    <>
      <Widget height={"160px"} marginBottom={"10px"}>
        <Header primary title="ČERSTVÝ MOŠT" marginTop="0rem" />
        <Paragraph bold primaryColor>
          Mošt 1L&nbsp;6 Kč
        </Paragraph>
        <Paragraph bold>/ + 6 Kč nádoba 1,5L /</Paragraph>
        <Paragraph smallFontSize>
          Celková cena za litr šťávy získané z Vašeho ovoce, které bylo
          přetříděno, omyto, drceno a lisováno. Pokud máte vlastní nádobu, do
          které chcete mošt stočit, pak za nádobu samozřejmě nic neplatíte.
        </Paragraph>
      </Widget>

      <Widget height={"185px"}>
        <Header primary title="PASTERIZOVANÝ MOŠT" marginTop="0rem" />
        <Paragraph bold primaryColor>
          Mošt 3L &nbsp;30 Kč
        </Paragraph>
        <Paragraph bold>/ + 15 Kč sáček 3L /</Paragraph>
        <Paragraph bold>/ + 7 Kč kartonová krabice 3L /</Paragraph>
        <Paragraph smallFontSize>
          Celková cena za 3L sáček naplněný šťávou získanou z Vašeho ovoce,
          které bylo přetříděno, omyto, drceno, lisováno a šťáva zpasterizována
          a plněna do sáčku. Doporučujeme k sáčku zakoupit i kartonovou krabici,
          kterou můžete používat i opakovaně.
        </Paragraph>
      </Widget>
    </>
  );
};

export default Content;

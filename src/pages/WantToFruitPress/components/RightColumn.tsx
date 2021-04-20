import { Header, Paragraph } from "@src/components/TextContent";
import Widget from "@src/components/TextContent/Widget";

const Content = () => {
  return (
    <>
      <Widget>
        <Header primary title="ČERSTVÝ MOŠT" />
        <Paragraph bold primaryColor>
          Mošt 1 l &nbsp;5 Kč
        </Paragraph>
        <Paragraph bold>/ + 5 Kč nádoba 1,5 l /</Paragraph>
        <Paragraph smallFontSize>
          Celková cena za litr šťávy získané z Vašeho ovoce, které bylo
          přetříděno, omyto, drceno a lisováno. Pokud máte vlastní nádobu, do
          které chcete mošt stočit, pak za nádobu samozřejmě nic neplatíte.
        </Paragraph>
      </Widget>

      <Widget>
        <Header primary title="PASTERIZOVANÝ MOŠT" />
        <Paragraph bold primaryColor>
          Mošt 3 l &nbsp;30 Kč
        </Paragraph>
        <Paragraph bold>/ + 15 Kč sáček 3 l /</Paragraph>
        <Paragraph bold>/ + 5 Kč kartonová krabice 3 l /</Paragraph>
        <Paragraph smallFontSize>
          Celková cena za 3 l sáček naplněný šťávou získanou z Vašeho ovoce,
          které bylo přetříděno, omyto, drceno, lisováno a získaná šťáva
          zpasterizována a plněna do sáčku. Doporučujeme k sáčku zakoupit i
          kartonovou krabici, kterou můžete používat i opakovaně.
        </Paragraph>
      </Widget>
    </>
  );
};

export default Content;

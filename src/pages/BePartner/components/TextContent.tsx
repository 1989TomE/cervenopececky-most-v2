import { Header, Paragraph } from "@src/components/TextContent";
import Widget from "@src/components/TextContent/Widget";

const partnerOfferings = [
  "ČERSTVÉ MOŠTY",
  "PASTERIZOVANÉ MOŠTY",
  "SUŠENÉ OVOCE",
  "JABLKA",
  "ZMOŠTOVÁNÍ VLASTNÍ ÚRODY",
];

const TextContent = () => {
  return (
    <>
      <Header title="Buď partnerem moštárny" marginTop="0rem" />
      <Paragraph>
        Prodávejte naše ovocné produkty ve Vaší provozovně. Pro partnery
        zajišťujeme:
      </Paragraph>
      <Widget marginBottom="1rem">
        {partnerOfferings.map((offering) => (
          <Paragraph key={offering} bold primaryColor marginTop="0.5rem">
            {offering}
          </Paragraph>
        ))}
      </Widget>
      <Paragraph>
        Neváhejte nás kontaktovat a zašleme Vám nabídku s velkoobchodní cenou.
      </Paragraph>
    </>
  );
};

export default TextContent;

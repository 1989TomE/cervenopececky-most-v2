import { Header, Paragraph } from "@src/components/TextContent";
import styled from "styled-components";

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

      <StyledOfferingsList>
        {partnerOfferings.map((offering) => (
          <Paragraph key={offering} bold marginTop="0.5rem">
            {offering}
          </Paragraph>
        ))}
      </StyledOfferingsList>

      <Paragraph>
        Neváhejte nás kontaktovat a zašleme Vám nabídku s velkoobchodní cenou.
      </Paragraph>
    </>
  );
};

export default TextContent;

const StyledOfferingsList = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

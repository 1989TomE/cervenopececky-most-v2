import ContactMainBox from "./ContactMainBox";
import ContactSection from "./ContactSection";

const LeftColumn = () => {
  return (
    <ContactMainBox>
      <ContactSection
        marginTop="0"
        title="Výroba a logistika"
        name="Tomáš Adamec"
        lines={["+420 604 402 763", "info@cervenopececkymost.cz"]}
      />

      <ContactSection
        title="Účetnictví a marketing"
        name="Aneta Adamcová"
        lines={["+420 728 317 274", "obchod@cervenopececkymost.cz"]}
      />

      <ContactSection
        title="Sadařství"
        name="Jiří Adamec st."
        lines={["+420 731 171 256", "info@cervenopececkymost.cz"]}
      />

      <ContactSection
        title="Fakturace"
        lines={[
          "Tomáš Adamec, IČO: 06215718",
          "Sídlo: Školní 196, Červené Pečky 28121",
          "Provozovna: Amálka 72, Červené Pečky 28121",
        ]}
      />
    </ContactMainBox>
  );
};

export default LeftColumn;

import ContactSection from "./ContactSection";

const LeftColumn = () => {
  return (
    <>
      <ContactSection
        marginTop="0"
        title="REZERVACE"
        subtitle="MOŠTOVÁNÍ PRO VEŘEJNOST"
        lines={["+420 604 402 763", "rezervace@cervenopececkymost.cz"]}
      />

      <ContactSection
        title="Výroba a logistika"
        name="Tomáš Adamec"
        lines={["+420 604 402 763 / info@cervenopececkymost.cz"]}
      />

      <ContactSection
        title="Sadařství"
        name="Jiří Adamec st."
        lines={["+420 731 171 256 / info@cervenopececkymost.cz"]}
      />

      <ContactSection
        title="Účetnictví a marketing"
        name="Aneta Adamcová"
        lines={["+420 728 317 274 / obchod@cervenopececkymost.cz"]}
      />
    </>
  );
};

export default LeftColumn;

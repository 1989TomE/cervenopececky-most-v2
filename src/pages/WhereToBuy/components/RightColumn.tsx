import { Header, Paragraph } from "@src/components/TextContent";
import Widget from "@src/components/TextContent/Widget";
import StyledMap from "./StyledMap";
import Label from "./../../../components/Navigation/components/Label";

const Content = () => {
  return (
    <>
      <Header title="Celoroční prodej" />
      <Paragraph bold>Dr. Dvořáka 394, Červené Pečky</Paragraph>
      <Paragraph paddingTop="0.5rem">
        Do vyprodání zásob lze zakoupit jablka, sušené ovoce a pasterizovaný
        mošt.
      </Paragraph>

      <Paragraph bold primaryColor paddingTop="3rem">
        pondělí – pátek
      </Paragraph>
      <Paragraph>
        <span style={{ fontWeight: 700 }}>17–20 hod.</span> / nebo dle domluvy
        volejte +420 731 171 256
      </Paragraph>

      <StyledMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.7497417373355!2d15.204135854765045!3d49.97389729909998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c6a8eb474c867%3A0x45eda3520debe074!2zRHIuIER2b8WZw6FrYSAzOTQsIDI4MSAyMSDEjGVydmVuw6kgUGXEjWt5!5e0!3m2!1scs!2scz!4v1618955051311!5m2!1scs!2scz"
        width="100%"
        height="250px"
        loading="lazy"
        name="Celoroční prodej"
        title="Celoroční prodej"
      />
    </>
  );
};

export default Content;

import { Column, ColumnsWrapper } from "@src/components/PagesContent/Layout";
import { Header, Paragraph } from "@src/components/TextContent";
import styled from "styled-components";
import StyledMap from "./StyledMap";

const Content = () => {
  return (
    <>
      <Header title="Výroba moštu" />
      <Paragraph bold>Tomáš Adamec</Paragraph>
      <Paragraph paddingTop="0.5rem">
        +420 604 402 763 / info@cervenopececkymost.cz
      </Paragraph>

      <Header title="Sadařství" marginTop="4rem" />
      <Paragraph bold>Jiří Adamec st</Paragraph>
      <Paragraph paddingTop="0.5rem">
        +420 731 171 256 / info@cervenopececkymost.cz
      </Paragraph>

      <Header title="Sadařství" marginTop="4rem" />
      <Paragraph bold>Amálka 72, Červené Pečky</Paragraph>
      <Paragraph paddingTop="0.5rem">
        Na prodejně lze do vyprodání zásob zakoupit jablka, sušené ovoce,
        čerstvý i pasterizovaný mošt.
      </Paragraph>

      <ColumnsWrapper>
        <Column>
          <Paragraph paddingTop="4rem" bold primaryColor>
            říjen – listopad
          </Paragraph>
          <Paragraph paddingTop="0.5rem" bold>
            sobota 9–12 hod.
          </Paragraph>
        </Column>

        <Column>
          <Paragraph paddingTop="4rem" bold primaryColor>
            březen – květen
          </Paragraph>
          <Paragraph paddingTop="0.5rem" bold>
            středa 16–18 hod.
          </Paragraph>
        </Column>
      </ColumnsWrapper>

      <StyledMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.3504117045239!2d15.20338653808051!3d49.981408505287135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c6a9254fc7337%3A0xbec99b913e8f7e6e!2zQW3DoWxrYSA3MiwgMjgxIDIxIMSMZXJ2ZW7DqSBQZcSNa3k!5e0!3m2!1scs!2scz!4v1618954105724!5m2!1scs!2scz"
        width="100%"
        height="250px"
        loading="lazy"
      />
    </>
  );
};

export default Content;

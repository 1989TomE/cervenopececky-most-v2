import { Column, ColumnsWrapper } from "@src/components/PagesContent/Layout";
import { Header, Paragraph } from "@src/components/TextContent";
import { tableMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";
import StyledMap from "./StyledMap";

const Content = () => {
  return (
    <Wrapper>
      <Header title="Čerstvý mošt / moštárna" />
      <Paragraph bold>Amálka 72, Červené Pečky</Paragraph>
      <Paragraph paddingTop="0.5rem">
        Na prodejně lze do vyprodání zásob zakoupit jablka, sušené ovoce,
        čerstvý i pasterizovaný mošt.
      </Paragraph>

      <div className="openingWrapper">
        <Column>
          <Paragraph paddingTop="3rem" bold primaryColor>
            říjen – listopad
          </Paragraph>
          <Paragraph bold>sobota 9–12 hod.</Paragraph>
        </Column>

        <Column>
          <Paragraph paddingTop="3rem" bold primaryColor>
            březen – květen
          </Paragraph>
          <Paragraph bold>středa 16–18 hod.</Paragraph>
        </Column>
      </div>

      <StyledMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.3504117045239!2d15.20338653808051!3d49.981408505287135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c6a9254fc7337%3A0xbec99b913e8f7e6e!2zQW3DoWxrYSA3MiwgMjgxIDIxIMSMZXJ2ZW7DqSBQZcSNa3k!5e0!3m2!1scs!2scz!4v1618954105724!5m2!1scs!2scz"
        width="100%"
        height="250px"
        loading="lazy"
      />
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  > .openingWrapper {
    display: flex;
  }
`;
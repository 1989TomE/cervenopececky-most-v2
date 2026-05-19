import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import {
  ContentWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";
import styled from "styled-components";
import { tabletMediaQuery } from "@src/styles/mediaQueries";

const Contact = () => {
  return (
    <PageWrapper>
      <ContentWrapper withPageHeader={false}>
        <ContactColumns>
          <Column isOnLeft>
            <LeftColumn />
          </Column>

          <Column isOnRight>
            <RightColumn />
          </Column>
        </ContactColumns>
      </ContentWrapper>
    </PageWrapper>
  );
};

const ContactColumns = styled.div`
  display: flex;
  align-items: flex-start;

  ${tabletMediaQuery} {
    flex-direction: column;
  }
`;

export default Contact;

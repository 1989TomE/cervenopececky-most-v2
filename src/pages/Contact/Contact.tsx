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
          <ContactLeftColumn isOnLeft>
            <LeftColumn />
          </ContactLeftColumn>

          <ContactRightColumn isOnRight>
            <RightColumn />
          </ContactRightColumn>
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
    align-items: stretch;
  }
`;

const ContactLeftColumn = styled(Column)`
  ${tabletMediaQuery} {
    order: 2;
  }
`;

const ContactRightColumn = styled(Column)`
  ${tabletMediaQuery} {
    order: 1;
    width: 100%;
  }
`;

export default Contact;

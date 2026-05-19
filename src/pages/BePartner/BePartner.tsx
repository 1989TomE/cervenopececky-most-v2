import TextContent from "./components/TextContent";
import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";

const BePartner = () => {
  return (
    <PageWrapper>
      <ContentWrapper withPageHeader={false}>
        <ColumnsWrapper>
          <Column isOnLeft>
            <TextContent />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default BePartner;

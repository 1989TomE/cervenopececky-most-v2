import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";

const PublicAppleJuicing = () => {
  return (
    <PageWrapper>
      <ContentWrapper withPageHeader>
        <ColumnsWrapper>
          <Column isOnLeft>
            <LeftColumn />
          </Column>

          <Column isOnRight>
            <RightColumn />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PublicAppleJuicing;

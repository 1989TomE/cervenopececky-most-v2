import LeftColumn from "../PublicAppleJuicing/components/LeftColumn";
import RightColumn from "../PublicAppleJuicing/components/RightColumn";
import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";

const WantToFruitPress = () => {
  return (
    <PageWrapper>
      <ContentWrapper withPageHeader={true}>
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

export default WantToFruitPress;

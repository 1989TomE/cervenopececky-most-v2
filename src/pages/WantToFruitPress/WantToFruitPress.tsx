import LeftColumn from "../PublicAppleJuicing/components/LeftColumn";
import RightColumn from "../PublicAppleJuicing/components/RightColumn";
import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";
import ContentHeader from "@src/components/PagesContent/Layout/ContentHeader";

const WantToFruitPress = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <ContentHeader />
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

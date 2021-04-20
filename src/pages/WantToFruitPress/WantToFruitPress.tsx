import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";
import ContentHeader from "@src/components/PagesContent/Layout/ContentHeader";

const WantToFruitPress = () => {
  return (
    <HomeSubPageWrapper>
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
    </HomeSubPageWrapper>
  );
};

export default WantToFruitPress;

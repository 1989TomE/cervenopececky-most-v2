import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";
import PagePortraitImage from "@src/components/PagesContent/PortraitImage/PagePortraitImage";
import TextContent from "./components/TextContent";
import fruitOrchards from "@root/assets/cuteLadyPortrait.jpg";
import ContentHeader from "@src/components/PagesContent/Layout/ContentHeader";

const FruitOrchards = () => {
  return (
    <HomeSubPageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <ContentHeader />
            <TextContent />
          </Column>

          <Column isOnRight>
            <PagePortraitImage src={fruitOrchards} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </HomeSubPageWrapper>
  );
};

export default FruitOrchards;

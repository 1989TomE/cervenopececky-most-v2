import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import TextContent from "./components/TextContent";
import fruitOrchards from "@root/assets/cuteLady.jpg";
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
            <PageImage src={fruitOrchards} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </HomeSubPageWrapper>
  );
};

export default FruitOrchards;

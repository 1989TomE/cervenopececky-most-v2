import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import TextContent from "./components/TextContent";
import fruitOrchards from "@root/assets/cuteLady.jpg";
import ContentHeader from "@src/components/PagesContent/Layout/ContentHeader";

const FruitOrchards = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default FruitOrchards;

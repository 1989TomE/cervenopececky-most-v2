import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import TextContent from "./components/TextContent";
import fruitOrchards from "@root/assets/ovocnysadfoto.jpg";

const FruitOrchards = () => {
  return (
    <PageWrapper>
      <ContentWrapper withPageHeader={true}>
        <ColumnsWrapper>
          <Column isOnLeft>
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

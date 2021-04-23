import {
  ContentWrapper,
  ColumnsWrapper,
  Column,
  PageWrapper,
} from "@src/components/PagesContent/Layout";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import TextContent from "./components/TextContent";
import products from "@root/assets/bottlesWidescreen.jpg";
import ContentHeader from "@src/components/PagesContent/Layout/ContentHeader";

const Making = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <ContentHeader />
            <TextContent />
          </Column>

          <Column isOnRight>
            <PageImage src={products} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Making;

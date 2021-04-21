import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";
import PageImage from "@src/components/PagesContent/PortraitImage/PageImage";
import TextContent from "./components/TextContent";
import products from "@root/assets/bottlesWidescreen.jpg";
import ContentHeader from "@src/components/PagesContent/Layout/ContentHeader";

const Products = () => {
  return (
    <HomeSubPageWrapper>
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
    </HomeSubPageWrapper>
  );
};

export default Products;

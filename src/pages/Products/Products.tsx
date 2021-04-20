import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";
import PagePortraitImage from "@src/components/PagesContent/PortraitImage/PagePortraitImage";
import TextContent from "./components/TextContent";
import products from "@root/assets/bottlesPortrait.jpg";
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
            <PagePortraitImage src={products} />
          </Column>
        </ColumnsWrapper>
      </ContentWrapper>
    </HomeSubPageWrapper>
  );
};

export default Products;

import {
  HomeSubPageWrapper,
  ContentWrapper,
  ColumnsWrapper,
  Column,
} from "@src/components/PagesContent/Layout";
import PagePortraitImage from "@src/components/PagesContent/PortraitImage/PagePortraitImage";
import { Header } from "@src/components/Typography";
import TextContent from "./components/TextContent";
import products from "@root/assets/bottlesPortrait.jpg";

const Products = () => {
  return (
    <HomeSubPageWrapper>
      <ContentWrapper>
        <ColumnsWrapper>
          <Column isOnLeft>
            <Header title="Naše produkty" />
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

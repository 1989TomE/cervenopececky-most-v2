import { PageWrapper } from "@src/components/PagesContent/Layout";
import { productsItems } from "./components/productsItems";
import ProductItem from "./components/ProductItem";
import styled from "styled-components";

const OurProducts = () => {
  return (
    <PageWrapper withSubNavigation={false}>
      <ContentWrapper>
        <Products>
          {productsItems.map((i) => (
            <ProductItem key={i.title} {...i} />
          ))}
        </Products>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default OurProducts;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Products = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

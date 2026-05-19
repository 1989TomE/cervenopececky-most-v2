import { Paragraph } from "@src/components/TextContent";
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
        <StockNote>
          Informace o skladové dostupnosti produktů na FB a IG
        </StockNote>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StockNote = styled(Paragraph)`
  text-align: center;
  margin-top: 1rem;
  padding: 0 1rem 2rem;
`;

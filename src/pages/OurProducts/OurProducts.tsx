import { PageWrapper } from "@src/components/PagesContent/Layout";
import ContentWrapper from "./components/ContentWrapper";
import { productsItems } from "./components/productsItems";
import ProductItem from "./components/ProductItem";

const OurProducts = () => {
  return (
    <PageWrapper withSubNavigation={false}>
      <ContentWrapper>
        {productsItems.map((i) => (
          <ProductItem key={i.title} {...i} />
        ))}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default OurProducts;

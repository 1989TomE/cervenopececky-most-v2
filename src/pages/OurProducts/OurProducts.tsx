import { PageWrapper } from "@src/components/PagesContent/Layout";
import ContentWrapper from "./components/ContentWrapper";
import { data } from "./components/mock";
import ProductItem from "./components/ProductItem";

const OurProducts = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        {data.map((i) => (
          <ProductItem key={i.title} {...i} />
        ))}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default OurProducts;
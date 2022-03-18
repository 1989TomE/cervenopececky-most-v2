import { Paragraph } from "@src/components/TextContent";
import styled from "styled-components";
import ProductImage, { ProductImageProps } from "./ProductImage";
import { Title } from "./Title";
import { Variant } from "./Variant";

export type ProductItemProps = ProductImageProps & {
  variants: Variant[];
  descriptions: string[];
};

const ProductItem = (props: ProductItemProps) => {
  const { src, title, variants, descriptions } = props;

  return (
    <Wrapper>
      <ProductImage src={src} title={title} />
      <Title title={title} />
      <VariantWrapper>
        {variants.map((variant, index) => (
          <Variant key={`${index}-${variant.text}`} {...variant} />
        ))}
      </VariantWrapper>
      {descriptions.map((description) => (
        <p key={description}>{description}</p>
      ))}
    </Wrapper>
  );
};

export default ProductItem;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0.3rem 4rem 0.3rem;
`;

const VariantWrapper = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

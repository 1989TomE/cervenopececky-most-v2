import { Paragraph } from "@src/components/TextContent";
import styled from "styled-components";
import ProductImage, { ProductImageProps } from "./ProductImage";
import { Title } from "./Title";
import { Price } from "./Price";

export type ProductItemProps = ProductImageProps & {
  prices: string[];
  descriptions: string[];
};

const ProductItem = (props: ProductItemProps) => {
  const { src, title, prices, descriptions } = props;

  return (
    <Wrapper>
      <ProductImage src={src} title={title} />
      <Title title={title} />
      {prices.map((price) => (
        <Price key={price} value={price} />
      ))}
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

  > p:first-of-type {
    margin-top: 0.5rem;
  }
`;

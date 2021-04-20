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
      {descriptions.map((description, index) => (
        <Paragraph
          key={description}
          paddingTop={index === 0 ? "0.75rem" : "0rem"}
          smallFontSize
        >
          {description}
        </Paragraph>
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
  margin: 1rem 0.4rem 4rem 0.4rem;
`;

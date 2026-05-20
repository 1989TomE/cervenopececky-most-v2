import { tabletMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";
import ProductImage, { ProductImageProps } from "./ProductImage";
import { Title } from "./Title";

export type ProductItemProps = ProductImageProps & {
  descriptions: string[];
};

const ProductItem = (props: ProductItemProps) => {
  const { src, title, descriptions } = props;

  return (
    <Wrapper>
      <ProductImage src={src} title={title} />
      <Title title={title} />
      <VariantWrapper />
      {descriptions.map((line, lineIndex) => (
        <Description key={`${title}-${lineIndex}`}>{line}</Description>
      ))}
    </Wrapper>
  );
};

export default ProductItem;

const Wrapper = styled.div`
  position: relative;
  flex: 0 0 33.333%;
  max-width: 33.333%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.3rem;
  margin-bottom: 4rem;

  ${tabletMediaQuery} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const VariantWrapper = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  width: 100%;
  text-align: center;
  font-family: roboto;
  font-size: ${(props) => props.theme.fontSize.normal};
  padding-bottom: 0.25rem;
`;

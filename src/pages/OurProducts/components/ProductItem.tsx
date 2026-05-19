import { tabletMediaQuery } from "@src/styles/mediaQueries";
import styled, { useTheme } from "styled-components";
import ProductImage, { ProductImageProps } from "./ProductImage";
import { Title } from "./Title";
import { DescriptionPart } from "./descriptionParts";
import { getFlavorHighlightColor } from "./flavorHighlightColor";
import { Variant } from "./Variant";

export type ProductItemProps = ProductImageProps & {
  variants: Variant[];
  descriptions: DescriptionPart[][];
  isNew?: boolean;
};

const ProductItem = (props: ProductItemProps) => {
  const { src, title, descriptions, isNew = false } = props;
  const theme = useTheme();

  return (
    <Wrapper>
      {isNew && <NewBadge>Novinka!</NewBadge>}
      <ProductImage src={src} title={title} />
      <Title title={title} />
      <VariantWrapper />
      {descriptions.map((line, lineIndex) => (
        <Description key={`${title}-${lineIndex}`}>
          {line.map((part, partIndex) =>
            part.highlight ? (
              <FlavorHighlight
                key={partIndex}
                $color={getFlavorHighlightColor(part.text, theme)}
              >
                {part.text}
              </FlavorHighlight>
            ) : (
              <span key={partIndex}>{part.text}</span>
            )
          )}
        </Description>
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

const NewBadge = styled.span`
  position: absolute;
  top: 0;
  left: 0.3rem;
  z-index: 2;
  padding: 0.4rem 0.75rem;
  font-family: robotoBold;
  font-size: ${(props) => props.theme.fontSize.normal};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.redDark};
  border-radius: 0.25rem;
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

const FlavorHighlight = styled.span<{ $color: string }>`
  font-family: robotoBold;
  color: ${(props) => props.$color};
`;

import styled from "styled-components";

export type ProductImageProps = {
  title: string;
  src?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

const ProductImage = ({ src, title }: ProductImageProps) => {
  return (
    <Wrapper>
      {src ? (
        <img src={src} alt={title} />
      ) : (
        <div className="imagePlaceholder">foto</div>
      )}
    </Wrapper>
  );
};

export default ProductImage;

const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  align-self: stretch;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
  }

  .imagePlaceholder {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

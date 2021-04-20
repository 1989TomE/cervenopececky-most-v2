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
  height: 160px;
  max-height: 160px;
  width: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .imagePlaceholder {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

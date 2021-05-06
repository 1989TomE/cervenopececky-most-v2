import { tabletMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";

type Props = {
  src: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

const PageImage = ({ src }: Props) => {
  return (
    <ImageContainer>
      <img src={src} />
    </ImageContainer>
  );
};

export default PageImage;

const ImageContainer = styled.div`
  padding: 3px 0px;
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

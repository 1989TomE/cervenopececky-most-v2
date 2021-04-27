import { tableMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";

type Props = {
  src: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

const PageImage = ({ src }: Props) => {
  return <Image src={src} />;
};

export default PageImage;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 7.2rem;

  ${tableMediaQuery} {
    margin-top: 1rem;
  }
`;

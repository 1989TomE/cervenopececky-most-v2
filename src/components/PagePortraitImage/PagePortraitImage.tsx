import styled from "styled-components";

type Props = {
  src: React.ImgHTMLAttributes<HTMLImageElement>["src"];
};

const PagePortraitImage = ({ src }: Props) => {
  return <Image src={src} />;
};

export default PagePortraitImage;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 5.5rem;
`;

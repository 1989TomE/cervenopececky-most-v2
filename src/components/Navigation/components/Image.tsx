type Props = {
  src: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  label: string;
};

const Image = ({ src, label }: Props) => {
  return <img src={src} alt={label} />;
};

export default Image;

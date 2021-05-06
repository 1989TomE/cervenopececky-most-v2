import { Wrapper } from "./NavIconItem";

type Props = {
  label: string;
  showLabel?: boolean;
  horizontalSpacing?: boolean;
  image?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  imageStyle?: React.HTMLAttributes<HTMLImageElement>["style"];
  className?: React.HTMLAttributes<HTMLImageElement>["className"];
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
};

const NavImageItem = ({
  label,
  image,
  imageStyle,
  href,
  showLabel,
  horizontalSpacing = true,
  className,
}: Props) => {
  return (
    <Wrapper horizontalSpacing={horizontalSpacing} className={className}>
      <a href={href} target="_blank">
        <div className="iconHolder">
          {image && (
            <img src={image} alt={label} className="icon" style={imageStyle} />
          )}
        </div>
        {showLabel && <div className="label">{label}</div>}
      </a>
    </Wrapper>
  );
};

export default NavImageItem;

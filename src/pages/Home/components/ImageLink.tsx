import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavigationRoute } from "@src/pages/index";
import { theme } from "@src/styles/theme";

type Props = {
  to: NavigationRoute;
  imageAltText: string;
  iconAltText: string;
  imageSource: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  icon: React.ElementType;
};

const ImageLink = ({
  to,
  imageSource,
  imageAltText,
  icon: Icon,
  iconAltText,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      to={to}
      hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageSource} alt={imageAltText} />

      <div className="background"></div>
      <div className="iconContainer">
        <Icon style={{ fill: theme.colors.white, height: "12rem" }} />
      </div>
    </Wrapper>
  );
};

export default ImageLink;

const Wrapper = styled(NavLink)<{ hovered: boolean }>`
  position: relative;
  flex: 1;
  height: 200px;
  margin: 1px;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  > div {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iconContainer {
    opacity: ${(props) => (props.hovered ? 0 : 1)};
    transition: opacity 0.25s ease-in-out;
    z-index: 2;
  }

  .background {
    opacity: ${(props) => (props.hovered ? 0 : 0.7)};
    transition: opacity 0.25s ease-in;
    background-color: ${(props) => props.theme.colors.ocher};
    z-index: 1;
  }
`;

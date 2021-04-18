import { HomeRoute } from "@src/pages/Home/index";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = {
  to: HomeRoute;
  imageSource: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  icon: React.ElementType;
  label: string;
};

const ImageLink = ({ to, imageSource, icon: SvgIcon, label }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      to={to}
      isHovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <img src={imageSource} alt={label} />
      </div>
      <div className="text">{label}</div>
      <div className="background" />
      <div className="svgContainer">
        <SvgIcon />
      </div>
    </Wrapper>
  );
};

export default ImageLink;

const Wrapper = styled(NavLink)<{ isHovered: boolean }>`
  position: relative;
  width: 49%;
  min-height: 280px;
  margin: 1px;

  > div {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 100%;
      height: 280px;
      object-fit: cover;
    }
  }

  .text {
    color: ${(props) => props.theme.colors.white};
    font-size: 30px;
    font-family: "barlow";
    opacity: ${(props) => (props.isHovered ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }

  .svgContainer {
    opacity: ${(props) => (props.isHovered ? 0 : 1)};
    transition: opacity 0.3s ease-in-out;
    z-index: 2;

    > svg {
      fill: ${(props) => props.theme.colors.white};
      height: 12rem;
    }
  }

  .background {
    opacity: ${(props) => (props.isHovered ? 0 : 0.7)};
    transition: opacity 0.3s ease-in;
    background-color: ${(props) => props.theme.colors.ocher};
    z-index: 1;
  }
`;

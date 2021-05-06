import { PageProps } from "@src/pages/index";
import { cellPhoneMediaQuery, tableMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavLink from "./NavLink";

type Props = PageProps & {
  showLabel?: boolean;
  horizontalSpacing?: boolean;
  image?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  imageStyle?: React.HTMLAttributes<HTMLImageElement>["style"];
  className?: React.HTMLAttributes<HTMLImageElement>["className"];
};

const NavItem = ({
  route,
  label,
  icon: SvgIcon,
  image,
  imageStyle,
  showLabel,
  horizontalSpacing = true,
  className,
}: Props) => {
  return (
    <Wrapper horizontalSpacing={horizontalSpacing} className={className}>
      <NavLink to={route}>
        <div className="iconHolder">
          {SvgIcon && <SvgIcon className="icon" />}
          {image && (
            <img src={image} alt={label} className="icon" style={imageStyle} />
          )}
        </div>
        {showLabel && <div className="label">{label}</div>}
      </NavLink>
    </Wrapper>
  );
};

export default NavItem;

const Wrapper = styled.li<{ horizontalSpacing: boolean }>`
  flex: 1;
  min-width: ${(props) => (props.horizontalSpacing ? "120px" : "50px")};
  max-width: ${(props) => (props.horizontalSpacing ? "150px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: center;

  &.image {
    display: none;
    ${tableMediaQuery} {
      display: flex;
    }
  }

  ${tableMediaQuery} {
    min-width: 50px;
    justify-content: flex-start;
    padding: 0 15px;
    max-width: 100%;
    width: 100%;
    height: 50px;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${tableMediaQuery} {
      flex-direction: row;
      justify-content: flex-start;
      flex: 1;
      height: 50px;
    }

    .iconHolder {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;

      > svg {
        height: ${(props) => props.theme.navIcons.size};
        fill: ${(props) => props.theme.colors.redLight};
        transition: 0.1s ease-in;

        ${tableMediaQuery} {
          height: 5rem;
        }
      }
    }

    > div {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.redLight};
      font-size: ${(props) => props.theme.fontSize.normal};
      font-weight: 700;
      transition: 0.1s ease-in;
    }

    &:hover {
      > svg {
        fill: ${(props) => props.theme.colors.redDark};
      }
      > div {
        color: ${(props) => props.theme.colors.redDark};
      }
    }

    .label {
      text-align: center;
    }
  }

  .active {
    opacity: 0.5;

    &:hover {
      > svg {
        fill: ${(props) => props.theme.colors.redLight};
      }
      > div {
        color: ${(props) => props.theme.colors.redLight};
      }
    }
  }
`;

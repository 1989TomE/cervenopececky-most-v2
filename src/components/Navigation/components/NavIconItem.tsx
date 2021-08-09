import { PageProps } from "@src/pages/index";
import {
  cellPhoneMediaQuery,
  tabletMediaQuery,
} from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavLink from "./NavLink";

type Props = Partial<PageProps> & {
  showLabel?: boolean;
  horizontalSpacing?: boolean;
  shrink?: boolean;
  href?: string;
};

const NavIconItem = ({
  route,
  label,
  icon: SvgIcon,
  showLabel,
  shrink,
  href,
  horizontalSpacing = true,
}: Props) => {
  return (
    <Wrapper
      horizontalSpacing={horizontalSpacing}
      shrink={shrink}
      className={route ? undefined : "externalLink"}
    >
      {SvgIcon &&
        (route ? (
          <NavLink to={route} href={href}>
            <div className="iconHolder">
              {SvgIcon && <SvgIcon className="icon" />}
            </div>
            {showLabel && <div className="label">{label}</div>}
          </NavLink>
        ) : (
          <a href={href}>
            <div className="iconHolder">
              {SvgIcon && <SvgIcon className="icon" />}
            </div>
            {showLabel && <div className="label">{label}</div>}
          </a>
        ))}
    </Wrapper>
  );
};

export default NavIconItem;

export const Wrapper = styled.li<{
  horizontalSpacing: boolean;
  shrink?: boolean;
}>`
  flex: 1;
  min-width: ${(props) => (props.horizontalSpacing ? "120px" : "50px")};
  max-width: ${(props) => (props.horizontalSpacing ? "150px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: center;

  &.externalLink {
    display: none;
    ${cellPhoneMediaQuery} {
      display: flex;
    }
  }

  ${tabletMediaQuery} {
    min-width: 50px;
    justify-content: flex-start;
    padding: 0 10px;
    max-width: ${(props) => (props.shrink ? undefined : "100%")};
    width: 100%;
    height: 50px;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${tabletMediaQuery} {
      flex-direction: row;
      justify-content: flex-start;
      flex: 1;
      height: 50px;
    }

    .iconHolder {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;

      > svg {
        height: ${(props) => props.theme.navIcons.size};
        fill: ${(props) => props.theme.colors.redLight};
        transition: 0.1s ease-in;

        ${tabletMediaQuery} {
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

      ${tabletMediaQuery} {
        margin-left: 10px;
      }
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

import { PageProps } from "@src/pages/index";
import { cellPhoneMediaQuery, tableMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavLink from "./NavLink";

type Props = PageProps & { showLabel?: boolean; horizontalSpacing?: boolean };

const NavItem = ({
  route,
  label,
  icon: SvgIcon,
  showLabel,
  horizontalSpacing = true,
}: Props) => {
  return (
    <Wrapper horizontalSpacing={horizontalSpacing}>
      <NavLink to={route}>
        <SvgIcon className="icon" />
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
  align-items: flex-end;

  ${tableMediaQuery} {
    min-width: 50px;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > svg {
      height: ${(props) => props.theme.navIcons.size};
      fill: ${(props) => props.theme.colors.redLight};
      transition: 0.1s ease-in;

      ${tableMediaQuery} {
        height: 5rem;
      }
    }

    > div {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.redLight};
      font-size: ${(props) => props.theme.fontSize.normal};
      font-weight: 700;
      transition: 0.1s ease-in;

      ${tableMediaQuery} {
        font-size: ${(props) => props.theme.fontSize.small};
      }

      ${cellPhoneMediaQuery} {
        font-size: 0.75rem;
      }
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

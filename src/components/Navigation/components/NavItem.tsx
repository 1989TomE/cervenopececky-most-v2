import { PageProps } from "@src/pages/index";
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
        {showLabel && <div>{label}</div>}
      </NavLink>
    </Wrapper>
  );
};

export default NavItem;

const Wrapper = styled.li<{ horizontalSpacing: boolean }>`
  flex: 1;
  min-width: ${(props) => (props.horizontalSpacing ? "120px" : "30px")};
  max-width: ${(props) => (props.horizontalSpacing ? "170px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: flex-end;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > svg {
      height: 6rem;
      fill: ${(props) => props.theme.colors.redLight};
      transition: 0.2s ease-in;
    }

    > div {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.redLight};
      font-size: 15px;
    }

    &:hover {
      > svg {
        fill: ${(props) => props.theme.colors.redDark};
      }
      > div {
        color: ${(props) => props.theme.colors.redDark};
      }
    }
  }

  .active {
    > svg {
      fill: ${(props) => props.theme.colors.redDark};
    }
    > div {
      color: ${(props) => props.theme.colors.redDark};
    }
  }
`;

import { MainNavigationRouteProps } from "@src/pages/index";
import styled from "styled-components";
import NavLink from "./NavLink";

const NavItem = ({ route, label, icon: SvgIcon }: MainNavigationRouteProps) => {
  return (
    <Wrapper>
      <NavLink to={route}>
        <SvgIcon className="icon" />
        <div>{label}</div>
      </NavLink>
    </Wrapper>
  );
};

export default NavItem;

const Wrapper = styled.li`
  flex: 1;
  min-width: 80px;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10rem;

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
    opacity: 0.5;
  }
`;

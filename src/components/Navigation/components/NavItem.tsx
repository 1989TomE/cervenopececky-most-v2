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

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > svg {
      height: 6rem;
      fill: ${(props) => props.theme.colors.redDark};
    }

    > div {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.redLight};
      font-size: 15px;
    }
  }

  .active {
    opacity: 0.5;
  }
`;

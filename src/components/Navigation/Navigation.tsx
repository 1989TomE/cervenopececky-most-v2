import { NavigationRoute, pages } from "@src/pages/index";
import styled from "styled-components";
import NavItem from "./components/NavItem";

const Navigation = () => {
  return (
    <Nav>
      <ul>
        {pages.map((page) => {
          const { route, icon, label } = page;

          return (
            <NavItem key={label} route={route} label={label} icon={icon} />
          );
        })}
      </ul>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  > ul {
    margin-top: 260px;
    display: flex;
    justify-content: center;
    padding: 3rem;
    list-style-type: none;
    margin-bottom: 2rem;
  }
`;

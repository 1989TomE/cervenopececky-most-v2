import { homePages } from "@src/pages/index";
import styled from "styled-components";
import NavItem from "./components/NavItem";

const HomeNavigation = () => {
  return (
    <Nav>
      <ul>
        {homePages.map((page) => {
          const { route, icon, label } = page;

          return (
            <NavItem
              key={label}
              route={route}
              label={label}
              icon={icon}
              horizontalSpacing={false}
            />
          );
        })}
      </ul>
    </Nav>
  );
};

export default HomeNavigation;

const Nav = styled.nav`
  > ul {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin-bottom: 1rem;
  }
`;

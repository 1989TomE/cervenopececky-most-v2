import { homePages } from "@src/pages/index";
import { tableMediaQuery } from "@src/styles/mediaQueries";
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
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin-bottom: 1rem;
    background-color: ${(props) => props.theme.colors.ocherLight};

    ${tableMediaQuery} {
      margin-top: 0rem;
    }
  }
`;

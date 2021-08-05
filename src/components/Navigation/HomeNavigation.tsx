import { homePages } from "@src/pages/index";
import { tabletMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavIconItem from "./components/NavIconItem";

const HomeNavigation = () => {
  return (
    <Nav>
      <ul>
        {homePages.map((page) => {
          const { route, icon, label } = page;

          return (
            <NavIconItem
              key={label}
              route={route}
              label={label}
              icon={icon}
              horizontalSpacing={false}
              shrink
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
    padding-top: 4rem;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding-bottom: 1rem;

    ${tabletMediaQuery} {
      padding-top: 0rem;
    }
  }
`;

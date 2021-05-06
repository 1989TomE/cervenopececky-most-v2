import { mainPages } from "@src/pages/index";
import { tableMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavItem from "./components/NavItem";

const Navigation = () => {
  return (
    <Nav>
      <ul>
        {mainPages.map((page) => {
          const { route, icon, label } = page;

          return (
            <NavItem
              key={label}
              route={route}
              label={label}
              icon={icon}
              showLabel
            />
          );
        })}
      </ul>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  ${tableMediaQuery} {
    display: none;
  }

  > ul {
    margin-top: 11rem;
    display: flex;
    justify-content: center;
    padding: 3rem 0rem;
    list-style-type: none;
    margin-bottom: 1rem;

    ${tableMediaQuery} {
      min-width: 50px;
    }
  }
`;

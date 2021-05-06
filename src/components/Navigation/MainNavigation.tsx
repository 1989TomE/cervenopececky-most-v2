import { mainPages } from "@src/pages/index";
import { tableMediaQuery } from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavItem from "./components/NavItem";
import cert from "@root/assets/pdf/cert.pdf";
import euMostarna from "@root/assets/eu_mostarna.jpg";
import polabi from "@root/assets/polabi.jpg";
import eu from "@root/assets/eu.png";

const Navigation = () => {
  const additionalLinks = (
    <>
      <NavItem
        route={cert}
        label={"Regionální produkt"}
        image={polabi}
        imageStyle={{
          width: "2.5rem",
        }}
        showLabel
        className="image"
      />
      <NavItem
        route={euMostarna}
        label={"Regionální produkt"}
        image={eu}
        imageStyle={{
          width: "3.8rem",
        }}
        showLabel
        className="image"
      />
    </>
  );

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
        {additionalLinks}
      </ul>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  > ul {
    margin-top: 11rem;
    display: flex;
    justify-content: center;
    padding: 3rem 0rem;
    list-style-type: none;
    margin-bottom: 1rem;

    ${tableMediaQuery} {
      flex-direction: column;
      background-color: ${(props) => props.theme.colors.ocherNavBar};
    }
  }
`;

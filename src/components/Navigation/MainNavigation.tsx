import { mainPages } from "@src/pages/index";
import {
  cellPhoneMediaQuery,
  tabletMediaQuery,
} from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavIconItem from "./components/NavIconItem";
import cert from "@root/assets/pdf/cert.pdf";
import euMostarna from "@root/assets/eu_mostarna.jpg";
import polabi from "@root/assets/polabi.svg";
import eu from "@root/assets/eu.svg";

type Props = {
  menuOpened: boolean;
};

const Navigation = ({ menuOpened }: Props) => {
  const additionalLinks = (
    <>
      <NavIconItem
        href={cert}
        label={"Regionální produkt"}
        icon={polabi}
        showLabel
      />
      <NavIconItem label={"Projekty"} showLabel href={euMostarna} icon={eu} />
    </>
  );

  return (
    <Nav closed={!menuOpened}>
      <ul>
        {mainPages.map((page) => {
          const { route, icon, label } = page;

          return (
            <NavIconItem
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

const Nav = styled.nav<{ closed: boolean }>`
  min-height: 120px;

  ${tabletMediaQuery} {
    min-height: 150px;
  }

  > ul {
    margin-top: 15rem;
    display: flex;
    justify-content: center;
    padding: 0rem 0rem;
    list-style-type: none;
    z-index: 2;
    background-color: white;

    ${tabletMediaQuery} {
      margin-top: 0rem;
      max-height: ${(props) => (props.closed ? "0px" : "280px")};
      overflow-y: hidden;
      transition: max-height 0.3s ease-in-out;
      flex-direction: column;
      margin-bottom: 1rem;
    }

    ${cellPhoneMediaQuery} {
      max-height: ${(props) => (props.closed ? "0px" : "380px")};
    }
  }
`;

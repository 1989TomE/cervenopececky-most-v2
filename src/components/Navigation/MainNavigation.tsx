import { mainPages } from "@src/pages/index";
import {
  cellPhoneMediaQuery,
  tabletMediaQuery,
} from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavIconItem from "./components/NavIconItem";
import NavImageItem from "./components/NavImageItem";
import cert from "@root/assets/pdf/cert.pdf";
import euMostarna from "@root/assets/eu_mostarna.jpg";
import polabi from "@root/assets/polabi.jpg";
import eu from "@root/assets/eu.png";
import { useAppContext } from "@src/context/context";

type Props = {
  menuOpened: boolean;
};

const Navigation = ({ menuOpened }: Props) => {
  const additionalLinks = (
    <>
      <NavImageItem
        href={cert}
        label={"Regionální produkt"}
        image={polabi}
        imageStyle={{
          width: "2.5rem",
        }}
        showLabel
        className="image"
      />
      <NavImageItem
        label={"Projekty"}
        imageStyle={{
          width: "3.8rem",
        }}
        showLabel
        className="image"
        href={euMostarna}
        image={eu}
      />
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
    min-height: 20px;
  }

  > ul {
    margin-top: 13rem;
    display: flex;
    justify-content: center;
    padding: 0rem 0rem;
    list-style-type: none;
    z-index: 1;
    transform: translateZ(0);
    margin-bottom: 15px;

    ${tabletMediaQuery} {
      max-height: ${(props) => (props.closed ? "0px" : "280px")};
      overflow-y: hidden;
      transition: max-height 0.3s ease-in-out;
      flex-direction: column;
      background-color: ${(props) => props.theme.colors.ocherNavBar};
    }

    ${cellPhoneMediaQuery} {
      max-height: ${(props) => (props.closed ? "0px" : "380px")};
    }
  }
`;

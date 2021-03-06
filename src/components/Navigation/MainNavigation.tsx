import { mainPages } from "@src/pages/index";
import {
  cellPhoneMediaQuery,
  tabletMediaQuery,
} from "@src/styles/mediaQueries";
import styled from "styled-components";
import NavIconItem from "./components/NavIconItem";

type Props = {
  menuOpened: boolean;
};

const Navigation = ({ menuOpened }: Props) => {
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
    padding-left: 0.5rem;

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

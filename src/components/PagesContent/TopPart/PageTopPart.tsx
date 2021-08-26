import styled from "styled-components";
import { default as InstagramSvgIcon } from "@root/assets/instagram.svg";
import { default as FacebookSvgIcon } from "@root/assets/facebook.svg";
import { default as Home } from "@root/assets/home.svg";
import { default as Menu } from "@root/assets/menu.svg";
import {
  cellPhoneMediaQuery,
  cellSmallPhoneMediaQuery,
  tabletMediaQuery,
} from "@src/styles/mediaQueries";
import { useAppContext } from "@src/context/context";
import { useHistory } from "react-router";
import { Page } from "@src/pages";
import { handleEUClick, handlePolabiClick } from "@src/utils/links";
import { Dispatch, SetStateAction } from "react";
import { default as PolabiSvgIcon } from "@root/assets/polabi.svg";
import { default as EuSvgIcon } from "@root/assets/eu.svg";

type Props = {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
};

const PageTopPart = ({ toggleMenu }: Props) => {
  const history = useHistory();
  const { setLandingPageSeen } = useAppContext();

  const handleHomeIconClick = () => {
    setLandingPageSeen(false);
    history.push(Page.Home);
  };

  const handleMenuClick = () => {
    toggleMenu((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <div className="homeContainer">
        <Home alt="domů" className="homeIcon" onClick={handleHomeIconClick} />
        <Menu alt="menu" className="menuIcon" onClick={handleMenuClick} />
      </div>

      <FacebookSvgIcon alt="facebook" className="facebook" />

      <InstagramSvgIcon alt="instagram" className="instagram" />

      <div className="emptySpacer" />

      <PolabiSvgIcon
        alt="polabi"
        className="polabi"
        onClick={handlePolabiClick}
      />

      <EuSvgIcon alt="eu" className="eu" onClick={handleEUClick} />
    </Wrapper>
  );
};

export default PageTopPart;

const Wrapper = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  position: relative;

  ${tabletMediaQuery} {
    padding: 10px 15px 0px 15px;
    top: -7rem;
  }

  > div {
    color: ${(props) => props.theme.colors.redLight};
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .emptySpacer {
    flex: 1;
    ${tabletMediaQuery} {
      display: none;
    }
  }

  .homeContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .homeIcon {
      height: 4rem;
      display: block;
      fill: white;

      ${tabletMediaQuery} {
        height: 5rem;
        fill: ${(props) => props.theme.colors.green};
      }
    }

    .menuIcon {
      display: none;

      ${tabletMediaQuery} {
        display: block;
        height: 5rem;
        fill: white;
        position: absolute;
        top: 7rem;
        left: 0;
        right: 0;
      }
    }
  }

  .facebook {
    height: 4rem;
    fill: white;

    ${tabletMediaQuery} {
      height: 5rem;
      fill: ${(props) => props.theme.colors.green};
    }
  }

  .instagram {
    height: 4rem;
    fill: white;

    ${tabletMediaQuery} {
      height: 5rem;
      fill: ${(props) => props.theme.colors.green};
    }
  }

  ${tabletMediaQuery} {
    flex: 2;
    display: flex;
    justify-content: space-between;
  }

  .polabi {
    cursor: pointer;
    height: 4rem;
    fill: white;

    ${tabletMediaQuery} {
      fill: ${(props) => props.theme.colors.green};
      height: 5rem;
    }
  }

  .eu {
    cursor: pointer;
    height: 4rem;
    fill: white;

    ${tabletMediaQuery} {
      height: 5rem;
      fill: ${(props) => props.theme.colors.green};
    }
  }
`;

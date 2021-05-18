import styled from "styled-components";
import { default as InstagramSvgIcon } from "@root/assets/instagram.svg";
import { default as FacebookSvgIcon } from "@root/assets/facebook.svg";
import { default as Home } from "@root/assets/home.svg";
import { default as Menu } from "@root/assets/menu.svg";
import {
  cellPhoneMediaQuery,
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
      <div className="left">
        <Home alt="domů" className="homeIcon" onClick={handleHomeIconClick} />
        <Menu alt="menu" className="menuIcon" onClick={handleMenuClick} />
        <FacebookSvgIcon alt="facebook" className="facebook" />
        <InstagramSvgIcon alt="instagram" className="instagram" />
      </div>
      <div className="mid">Moštárna Červené Pečky</div>
      <div className="right">
        <PolabiSvgIcon
          alt="polabi"
          className="polabi"
          onClick={handlePolabiClick}
        />
        <EuSvgIcon alt="eu" className="eu" onClick={handleEUClick} />
      </div>
    </Wrapper>
  );
};

export default PageTopPart;

const Wrapper = styled.div`
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  position: relative;

  ${tabletMediaQuery} {
    padding: 0px 15px;
    height: 10rem;
  }

  > div {
    color: ${(props) => props.theme.colors.redLight};
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .mid {
    display: flex;
    flex: 3;
    font-family: "neteworthy";
    font-size: 2.2rem;
    font-weight: bold;

    ${tabletMediaQuery} {
      font-size: 1.8rem;
    }
  }

  .left,
  .right {
    flex: 1;
    min-width: 190px;
    justify-content: flex-start;

    ${tabletMediaQuery} {
      min-width: auto;
    }
  }

  .left {
    ${cellPhoneMediaQuery} {
      position: absolute;
      top: 0px;
      left: 15px;
      bottom: 0px;
    }

    .homeIcon {
      display: block;
      fill: ${(props) => props.theme.colors.redLight};

      ${tabletMediaQuery} {
        display: none;
      }
    }

    .menuIcon {
      display: none;

      ${tabletMediaQuery} {
        display: block;
      }
    }

    .homeIcon,
    .menuIcon {
      height: 4rem;
      fill: ${(props) => props.theme.colors.redLight};
      cursor: pointer;
    }
  }

  .right {
    justify-content: flex-end;
    ${cellPhoneMediaQuery} {
      display: none;
    }
  }

  .facebook {
    height: 4rem;
    fill: ${(props) => props.theme.colors.redLight};

    ${cellPhoneMediaQuery} {
      display: none;
    }
  }

  .instagram {
    height: 4rem;
    fill: ${(props) => props.theme.colors.redLight};

    ${tabletMediaQuery} {
      height: 3.5rem;
    }

    ${cellPhoneMediaQuery} {
      display: none;
    }
  }

  .polabi {
    cursor: pointer;
    height: 4rem;
    fill: ${(props) => props.theme.colors.redLight};
  }

  .eu {
    cursor: pointer;
    height: 4rem;
    fill: ${(props) => props.theme.colors.redLight};
  }
`;

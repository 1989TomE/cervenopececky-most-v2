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
      <div className="left">
        <Home alt="domů" className="homeIcon" onClick={handleHomeIconClick} />
        <Menu alt="menu" className="menuIcon" onClick={handleMenuClick} />
        <FacebookSvgIcon alt="facebook" className="facebook" />
        <InstagramSvgIcon alt="instagram" className="instagram" />
      </div>
      {/* <div className="mid">Moštárna Červené Pečky</div> */}
      <div className="right">
        <PolabiSvgIcon
          alt="polabi"
          className="polabi"
          onClick={handlePolabiClick}
        />
        <EuSvgIcon alt="eu" className="eu" onClick={handleEUClick} />
        <Home
          alt="domů"
          className="homeIconRight"
          onClick={handleHomeIconClick}
        />
      </div>
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
    padding: 0px 15px;
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
    font-size: 2.4rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 5px;

    ${cellSmallPhoneMediaQuery} {
      letter-spacing: 0px;
      font-size: 1.8rem;
      margin-left: 0px;
    }
  }

  .left,
  .right {
    min-width: 130px;
    justify-content: flex-start;

    ${tabletMediaQuery} {
      min-width: 80px;
    }

    ${cellPhoneMediaQuery} {
      min-width: 0px;
    }
  }

  .left {
    .facebook {
      height: 4rem;
      fill: white;

      ${tabletMediaQuery} {
        display: none;
      }
    }

    .instagram {
      height: 4rem;
      fill: white;

      ${tabletMediaQuery} {
        height: 3.5rem;
        display: none;
      }
    }

    .homeIcon {
      display: block;
      fill: white;

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
      fill: white;
      cursor: pointer;
    }
  }

  .right {
    justify-content: flex-end;

    .homeIconRight {
      display: none;
      height: 4rem;
      fill: white;

      ${cellPhoneMediaQuery} {
        display: block;
      }
    }
    .polabi {
      cursor: pointer;
      height: 4rem;
      fill: white;

      ${cellPhoneMediaQuery} {
        display: none;
      }
    }

    .eu {
      cursor: pointer;
      height: 4rem;
      fill: white;

      ${cellPhoneMediaQuery} {
        display: none;
      }
    }
  }
`;

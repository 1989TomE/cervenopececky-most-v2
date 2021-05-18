import styled from "styled-components";
import { default as InstagramSvgIcon } from "@root/assets/instagram.svg";
import { default as FacebookSvgIcon } from "@root/assets/facebook.svg";
import { default as Home } from "@root/assets/home.svg";
import { default as Menu } from "@root/assets/menu.svg";
import polabi from "@root/assets/polabi.jpg";
import eu from "@root/assets/eu.png";
import {
  cellPhoneMediaQuery,
  tabletMediaQuery,
} from "@src/styles/mediaQueries";
import { useAppContext } from "@src/context/context";
import { useHistory } from "react-router";
import { Page } from "@src/pages";
import { handleEUClick, handlePolabiClick } from "@src/utils/links";
import { Dispatch, SetStateAction } from "react";

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
        <img
          src={polabi}
          alt="polabi"
          className="polabi"
          onClick={handlePolabiClick}
        />
        <img src={eu} alt="EU" className="eu" onClick={handleEUClick} />
      </div>
    </Wrapper>
  );
};

export default PageTopPart;

const Wrapper = styled.div`
  height: 10rem;
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
    height: 6rem;
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

    ${cellPhoneMediaQuery} {
      justify-content: center;
      font-size: 1.6rem;
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
    .homeIcon {
      display: block;

      ${tabletMediaQuery} {
        display: none;
      }
    }

    .menuIcon {
      display: none;

      ${tabletMediaQuery} {
        display: block;
      }

      ${cellPhoneMediaQuery} {
        position: absolute;
        top: 25px;
        left: 15px;
        right: 0;
      }
    }

    .homeIcon,
    .menuIcon {
      height: 4rem;
      fill: ${(props) => props.theme.colors.redLight};
      cursor: pointer;

      ${tabletMediaQuery} {
        height: 5rem;
      }

      &:hover {
        fill: ${(props) => props.theme.colors.redDark};
      }
    }
  }

  .right {
    justify-content: flex-end;
  }

  .facebook {
    height: 4rem;
    fill: ${(props) => props.theme.colors.redDark};

    ${cellPhoneMediaQuery} {
      display: none;
    }
  }

  .instagram {
    height: 4rem;
    fill: ${(props) => props.theme.colors.redDark};

    ${tabletMediaQuery} {
      height: 4rem;
    }

    ${cellPhoneMediaQuery} {
      display: none;
    }
  }

  .polabi {
    height: 2.5rem;
    margin-right: 2rem;
    cursor: pointer;

    ${tabletMediaQuery} {
      height: 2rem;
    }
  }

  .eu {
    height: 2.5rem;
    cursor: pointer;

    ${tabletMediaQuery} {
      height: 2rem;
    }
  }
`;

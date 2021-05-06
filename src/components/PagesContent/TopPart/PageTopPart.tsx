import styled from "styled-components";
import { default as InstagramSvgIcon } from "@root/assets/instagram.svg";
import { default as FacebookSvgIcon } from "@root/assets/facebook.svg";
import { default as Home } from "@root/assets/home.svg";
import { default as Menu } from "@root/assets/menu.svg";
import polabi from "@root/assets/polabi.jpg";
import eu from "@root/assets/eu.png";
import cert from "@root/assets/pdf/cert.pdf";
import euMostarna from "@root/assets/eu_mostarna.jpg";
import { cellPhoneMediaQuery, tableMediaQuery } from "@src/styles/mediaQueries";

const PageTopPart = () => {
  const handleEUClick = () => {
    window.open(euMostarna, "_blank");
  };

  const handlePolabiClick = () => {
    window.open(cert, "_blank");
  };

  return (
    <Wrapper>
      <div className="left">
        <FacebookSvgIcon alt="facebook" className="facebook" />
        <InstagramSvgIcon alt="instagram" className="instagram" />
        <div className="phoneNumber">+420 604 402 763</div>
      </div>
      <div className="mid">
        <Home alt="domů" className="homeIcon" />
        <Menu alt="menu" className="menuIcon" />
        Moštárna Červené Pečky
      </div>
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

    ${tableMediaQuery} {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .homeIcon {
      display: block;
      ${tableMediaQuery} {
        display: none;
      }
    }

    .menuIcon {
      display: none;
      ${tableMediaQuery} {
        display: block;
      }
    }

    .homeIcon,
    .menuIcon {
      height: 4rem;
      fill: ${(props) => props.theme.colors.redLight};
      cursor: pointer;

      &:hover {
        fill: ${(props) => props.theme.colors.redDark};
      }
    }
  }

  .left,
  .right {
    flex: 1;
    justify-content: flex-start;

    ${cellPhoneMediaQuery} {
      display: none;
    }
  }

  .right {
    justify-content: flex-end;
  }

  .facebook {
    margin-left: -10px; // compensation for svg padding
    height: 4rem;
    fill: ${(props) => props.theme.colors.redDark};
  }

  .instagram {
    height: 4rem;
    fill: ${(props) => props.theme.colors.redDark};

    ${tableMediaQuery} {
      height: 4rem;
    }
  }

  .phoneNumber {
    margin-left: 1.5rem;
    font-size: 1.3rem;

    ${tableMediaQuery} {
      display: none;
    }
  }

  .polabi {
    height: 2.5rem;
    margin-right: 2rem;
    cursor: pointer;

    ${tableMediaQuery} {
      height: 2rem;
    }
  }

  .eu {
    height: 2.5rem;
    cursor: pointer;

    ${tableMediaQuery} {
      height: 2rem;
    }
  }
`;

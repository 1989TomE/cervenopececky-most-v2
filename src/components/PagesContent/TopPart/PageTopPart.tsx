import styled from "styled-components";
import { default as InstagramSvgIcon } from "@root/assets/instagram.svg";
import { default as FacebookSvgIcon } from "@root/assets/facebook.svg";
import polabi from "@root/assets/polabi.png";
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
      <div>
        <FacebookSvgIcon alt="facebook" className="facebook" />
        <InstagramSvgIcon alt="instagram" className="instagram" />
        <div className="phoneNumber">+420 604 402 763</div>
      </div>
      <div>
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

  > div {
    color: ${(props) => props.theme.colors.redLight};
    height: 6rem;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .facebook {
    margin-left: -1.5rem; // compensation for svg padding
    height: 6rem;
    fill: ${(props) => props.theme.colors.redDark};

    ${tableMediaQuery} {
      height: 4.5rem;
    }
  }

  .instagram {
    height: 6rem;
    fill: ${(props) => props.theme.colors.redDark};

    ${tableMediaQuery} {
      height: 4.5rem;
    }
  }

  .phoneNumber {
    margin-left: 1.5rem;
    font-size: 1.5rem;

    ${tableMediaQuery} {
      font-size: 1.3rem;
    }

    ${cellPhoneMediaQuery} {
      font-size: 1.1rem;
    }
  }

  .polabi {
    height: 4rem;
    margin-right: 2rem;
    cursor: pointer;

    ${tableMediaQuery} {
      height: 3rem;
    }
  }

  .eu {
    height: 3.5rem;
    cursor: pointer;

    ${tableMediaQuery} {
      height: 2.5rem;
    }
  }
`;

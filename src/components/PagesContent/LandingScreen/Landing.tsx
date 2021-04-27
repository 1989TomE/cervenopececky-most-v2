import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import landingImage from "@root/assets/landing.jpg";
import landingImageFullHd from "@root/assets/landingFullHd.jpg";
import whiteLogo from "@root/assets/logo_white.png";
import { tableMediaQuery } from "@src/styles/mediaQueries";

type Props = {
  setLandingPageSeen: Dispatch<SetStateAction<boolean>>;
};

const Landing = ({ setLandingPageSeen }: Props) => {
  const [backGroundImageLoaded, setBackgroundImageLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [hideLanding, setHideLanding] = useState(false);
  const [render, setRender] = useState(true);

  const startAnimation = logoLoaded && backGroundImageLoaded;

  useEffect(() => {
    const root = document.querySelector("#root") as HTMLElement;

    if (!hideLanding) {
      root.style.overflowY = "hidden";
    } else {
      root.style.overflowY = "scroll";
    }
  }, [hideLanding]);

  useEffect(() => {
    let timerId: number | undefined = undefined;

    if (backGroundImageLoaded) {
      timerId = window.setTimeout(() => {
        setHideLanding(true);
      }, 4000);
    }

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [backGroundImageLoaded]);

  const landingPageFadingOut = () => {
    if (hideLanding) {
      setRender(false);
      setLandingPageSeen(true);
    }
  };

  return render ? (
    <Wrapper
      onTransitionEnd={landingPageFadingOut}
      $startAnimation={startAnimation}
      $hide={hideLanding}
    >
      <div className="imageWrapper">
        <img
          src={window.innerWidth > 1920 ? landingImage : landingImageFullHd}
          onLoad={() => {
            setBackgroundImageLoaded(true);
          }}
          alt="fruit tree image"
        />
      </div>

      <div
        className="logoWrapper"
        onClick={() => {
          setHideLanding(true);
        }}
      >
        <img
          src={whiteLogo}
          onLoad={() => {
            setLogoLoaded(true);
          }}
          alt="logo image"
        />
      </div>
    </Wrapper>
  ) : null;
};

export default Landing;

type StyleProps = {
  $hide: boolean;
  $startAnimation: boolean;
};

const Wrapper = styled.div<StyleProps>`
  opacity: ${(props) => (props.$hide ? 0 : 1)};
  transition: 1s ease-in;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 100;

  .imageWrapper {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: ${(props) => props.theme.colors.greyDark};
    z-index: 101;

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: ${(props) => (props.$startAnimation ? 1 : 0)};
    }
  }

  .logoWrapper {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 102;

    > img {
      position: relative;
      height: 380px;
      width: 380px;
      opacity: ${(props) => (props.$startAnimation ? 1 : 0)};
      cursor: pointer;

      ${tableMediaQuery} {
        height: auto;
        width: 75%;
      }
    }
  }
`;

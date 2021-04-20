import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import landingImage from "@root/assets/landing_background.jpg";
import whiteLogo from "@root/assets/logo_white.jpg";
import { useAppContext } from "@src/context/context";

type Props = {
  setShowLandingPage: Dispatch<SetStateAction<boolean>>;
};

const Landing = ({ setShowLandingPage }: Props) => {
  const [backGroundImageLoaded, setBackgroundImageLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [hideLanding, setHideLanding] = useState(false);
  const [render, setRender] = useState(true);

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
      }, 7000);
    }

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [backGroundImageLoaded]);

  const landingPageFadingOut = () => {
    if (hideLanding) {
      setRender(false);
      setShowLandingPage(false);
    }
  };

  return render ? (
    <Wrapper
      onTransitionEnd={landingPageFadingOut}
      $backgroundImageLoaded={backGroundImageLoaded}
      $logoLoaded={logoLoaded}
      $hide={hideLanding}
    >
      <div className="imageWrapper">
        <img
          src={landingImage}
          onLoad={() => {
            setBackgroundImageLoaded(true);
          }}
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
        />
      </div>
    </Wrapper>
  ) : null;
};

export default Landing;

const Wrapper = styled.div<{
  $hide: boolean;
  $logoLoaded: boolean;
  $backgroundImageLoaded: boolean;
}>`
  opacity: ${(props) => (props.$hide ? 0 : 1)};
  transition: 0.5s ease-in;
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
      opacity: ${(props) => (props.$backgroundImageLoaded ? 1 : 0)};

      transition: 2.5s ease-in;
      transition-delay: 1s;
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
      opacity: ${(props) => (props.$logoLoaded ? 1 : 0)};
      transition: 0.25s ease-in;
      cursor: pointer;
    }
  }
`;

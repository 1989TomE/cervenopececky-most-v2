import { useEffect, useState } from "react";
import styled from "styled-components";
import landingImage from "@root/assets/landing_background.jpg";
import whiteLogo from "@root/assets/logo_white.jpg";
import { pageHeight } from "@src/styles/page";

const Landing = () => {
  const [backGroundImageLoaded, setBackgroundImageLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [hideLanding, setHideLanding] = useState(false);
  const [render, setRender] = useState(true);

  useEffect(() => {
    let timerId: number | undefined = undefined;

    if (backGroundImageLoaded) {
      timerId = window.setTimeout(() => {
        // setHideLanding(true);
      }, 5000);
    }

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [backGroundImageLoaded]);

  return render ? (
    <>
      <LogoWrapper
        onTransitionEnd={() => {
          if (hideLanding) {
            setRender(false);
          }
        }}
        logoLoaded={logoLoaded}
        hide={hideLanding}
      >
        <img
          src={whiteLogo}
          onLoad={() => {
            setLogoLoaded(true);
          }}
          onClick={() => {
            setHideLanding(true);
          }}
        />
      </LogoWrapper>

      <BackgroundImageWrapper
        hide={hideLanding}
        backgroundImageLoaded={backGroundImageLoaded}
      >
        <img
          src={landingImage}
          onLoad={() => {
            setBackgroundImageLoaded(true);
          }}
        />
      </BackgroundImageWrapper>
    </>
  ) : null;
};

export default Landing;

const LogoWrapper = styled.div<{ hide: boolean; logoLoaded: boolean }>`
  opacity: ${(props) => (props.hide ? 0 : 1)};
  transition: 1s ease-in-out;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 10;

  > img {
    opacity: ${(props) => (props.logoLoaded ? 1 : 0)};
    transition: 0.5s ease-in-out;
    width: 300px;
    height: 300px;
    z-index: 1;
    cursor: pointer;
  }
`;

const BackgroundImageWrapper = styled.div<{
  hide: boolean;
  backgroundImageLoaded: boolean;
}>`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.greyDark};
  bottom: ${window.visualViewport.height}px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${(props) => (props.backgroundImageLoaded ? 1 : 0)};
    transition: 3s ease-in;
  }
`;

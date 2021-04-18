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
        setHideLanding(true);
      }, 6000);
    }

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [backGroundImageLoaded]);

  return render ? (
    <Wrapper
      onTransitionEnd={() => {
        if (hideLanding) {
          setRender(false);
        }
      }}
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

      <div className="logoWrapper">
        <img
          src={whiteLogo}
          onLoad={() => {
            setLogoLoaded(true);
          }}
          onClick={() => {
            setHideLanding(true);
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
  transition: 1s ease-in-out;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 100;

  .imageWrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: ${pageHeight}px;
    background-color: ${(props) => props.theme.colors.greyDark};
    z-index: 101;

    > img {
      height: 100%;
      object-fit: contain;
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
      top: 10%;
      height: 300px;
      width: 300px;
      opacity: ${(props) => (props.$logoLoaded ? 1 : 0)};
      transition: 0.25s ease-in;
      cursor: pointer;
    }
  }
`;

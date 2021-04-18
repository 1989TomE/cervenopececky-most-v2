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
    <Wrapper
      onTransitionEnd={() => {
        if (hideLanding) {
          console.log("redred to false");
          setRender(false);
        }
      }}
      hide={hideLanding}
    >
      <div className="logoContainer">
        <LogoImage
          src={whiteLogo}
          loaded={logoLoaded}
          onLoad={() => {
            setLogoLoaded(true);
          }}
          onClick={() => {
            setHideLanding(true);
          }}
        />
      </div>

      <BackgroundImage
        src={landingImage}
        loaded={backGroundImageLoaded}
        onLoad={() => {
          setBackgroundImageLoaded(true);
        }}
      />
    </Wrapper>
  ) : null;
};

export default Landing;

const Wrapper = styled.div<{ hide: boolean }>`
  background-color: ${(props) => props.theme.colors.greyDark};
  opacity: ${(props) => (props.hide ? 0 : 1)};
  transition: 1s ease-in-out;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: ${pageHeight}px;
  z-index: 10;

  .logoContainer {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BackgroundImage = styled.img<{ loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: 3s ease-in;
`;

const LogoImage = styled.img<{ loaded: boolean }>`
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: 0.5s ease-in-out;
  width: 300px;
  height: 300px;
  z-index: 1;
  cursor: pointer;
`;

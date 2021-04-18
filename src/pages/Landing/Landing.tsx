import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import landingImage from "../../../assets/landing_background.jpg";
import whiteLogo from "../../../assets/logo_white.jpg";
import { Page } from "../index";

const LandingPage = () => {
  const [backGroundImageLoaded, setBackgroundImageLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let timerId: number | undefined = undefined;

    if (backGroundImageLoaded) {
      timerId = window.setTimeout(() => {
        setRedirect(true);
      }, 6000);
    }

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [backGroundImageLoaded]);

  return redirect ? (
    <Redirect to={Page.Home} />
  ) : (
    <Wrapper>
      <div>
        <LogoImage
          src={whiteLogo}
          loaded={logoLoaded}
          onLoad={() => {
            setLogoLoaded(true);
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
  );
};

export default LandingPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.greyDark};
  position: relative;

  > div {
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
  transition: opacity 4s ease-in-out;
`;

const LogoImage = styled.img<{ loaded: boolean }>`
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
  width: 300px;
  height: 300px;
  z-index: 1;
`;

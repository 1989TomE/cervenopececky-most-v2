import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import landingImage from "../../../assets/CPmost_web_bckg.jpg";
import { Page } from "../index";

const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setRedirect(true);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return redirect ? (
    <Redirect to={Page.Home} />
  ) : (
    <Image src={landingImage} onLoad={() => setLoaded(true)} loaded={loaded} />
  );
};

export default LandingPage;

const Image = styled.img<{ loaded: boolean }>`
  @keyframes fadeIn {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }

  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.loaded ? "block" : "none")};
  animation-name: "fadeIn";
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
`;

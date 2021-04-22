import styled from "styled-components";
import homeBackgroundImage from "@root/assets/webBackground.jpg";
import PageTopPart from "@src/components/PagesContent/TopPart/PageTopPart";
import Navigation from "@src/components/Navigation/MainNavigation";
import { pageMinHeight } from "@src/styles/page";
import { useState, useEffect } from "react";
import Landing from "../LandingScreen/Landing";
import { useAppContext } from "@src/context/context";
import { useLocation } from "react-router";
import Routes from "@src/pages/Routes";
import { Page } from "@src/pages";

type Props = {
  children?: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  const location = useLocation();
  const { landingPageSeen, setLandingPageSeen } = useAppContext();
  const [mounted, setMounted] = useState(false);

  const showLandingPage = !landingPageSeen && location.pathname === Page.Home;

  useEffect(() => {
    if (!showLandingPage) {
      setLandingPageSeen(true);
    }
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMounted(true);
    });

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Wrapper mounted={mounted} className="pageWrapper">
      {showLandingPage && <Landing setLandingPageSeen={setLandingPageSeen} />}

      <div className="pageContainer">
        <PageTopPart />
        <Navigation />
        <main className="contentContainer">{children}</main>
        <footer className="footer">
          &#xA9;
          {`2021 created by TomE, designed by Kamka${
            process.env.NODE_ENV === "development"
              ? `; v${process.env.VERSION}`
              : ""
          }`}
        </footer>
      </div>
    </Wrapper>
  );
};

export default PageWrapper;

export const Wrapper = styled.div<{ mounted: boolean }>`
  height: ${pageMinHeight}px;
  max-width: 2560px;
  background-image: url(${homeBackgroundImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  .pageContainer {
    margin: 0 auto;
    max-width: 800px;

    .contentContainer {
      opacity: ${(props) => (props.mounted ? 1 : 0)};
      transition: opacity 0.5s ease-in-out;
    }

    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;
      > img {
        width: 20rem;
        height: 20rem;
      }
    }
  }
`;

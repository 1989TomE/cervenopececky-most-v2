import styled from "styled-components";
import homeBackgroundImage from "@root/assets/background.jpg";
import PageTopPart from "@src/components/PagesContent/TopPart/PageTopPart";
import Navigation from "@src/components/Navigation/MainNavigation";
import { useState, useEffect } from "react";
import { useAppContext } from "@src/context/context";
import { useLocation } from "react-router";
import { Page } from "@src/pages";
import HomeNavigation from "@src/components/Navigation/HomeNavigation";
import { tableMediaQuery } from "@src/styles/mediaQueries";

type Props = {
  children?: React.ReactNode;
  withSubNavigation?: boolean;
};

const PageWrapper = ({ children, withSubNavigation = true }: Props) => {
  const location = useLocation();
  const { landingPageSeen, setLandingPageSeen } = useAppContext();
  const [mounted, setMounted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

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
      {/* {showLandingPage && <Landing setLandingPageSeen={setLandingPageSeen} />} */}

      <div className="pageContainer">
        <PageTopPart toggleMenu={setMenuOpened} />
        <Navigation menuOpened={menuOpened} />
        <main className="contentContainer">{children}</main>
        {withSubNavigation && (
          <div>
            <HomeNavigation />
          </div>
        )}
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
  height: 1500px;
  max-width: 2560px;
  background-image: url(${homeBackgroundImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  min-width: 320px;
  margin: 0 auto;

  .pageContainer {
    margin: 0 auto;
    max-width: 840px;

    .contentContainer {
      opacity: ${(props) => (props.mounted ? 1 : 0)};
      transition: opacity 0.5s ease-in-out;
      ${tableMediaQuery} {
        background-color: ${(props) => props.theme.colors.ocherLight};
      }
      padding: ${(props) => props.theme.padding.pageContent};
      min-height: 450px;
    }

    .footer {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 4rem;
      padding: 2rem;
      text-align: center;
      padding-bottom: 1rem;
      background-color: ${(props) => props.theme.colors.ocherLight};
    }
  }
`;

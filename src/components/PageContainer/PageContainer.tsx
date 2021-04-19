import styled from "styled-components";
import homeBackgroundImage from "@root/assets/webBackground.jpg";
import PageTopPart from "@src/components/PageTopPart/PageTopPart";
import Navigation from "@src/components/Navigation/Navigation";
import { pageMinHeight } from "@src/styles/page";
import darkLogo from "@root/assets/logo_dark.jpg";

type Props = {
  children?: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return (
    <Wrapper>
      <div className="pageContainer">
        <PageTopPart />
        <Navigation />
        <main className="contentContainer">{children}</main>
        <footer className="footer">
          <img src={darkLogo} alt="logo" />
        </footer>
      </div>
    </Wrapper>
  );
};

export default PageContainer;

export const Wrapper = styled.div`
  height: ${pageMinHeight}px;
  max-width: 2560px;
  background-image: url(${homeBackgroundImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  margin: 0 auto;

  .pageContainer {
    margin: 0 auto;
    max-width: 1080px;

    .contentContainer {
      display: flex;
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

import PageWrapper from "@src/components/PagesContent/Layout/Page";
import Landing from "./components/Landing";
import Content from "./components/Content";
import { useAppContext } from "@src/context/context";
import env from "dotenv-webpack";

const Home = () => {
  const { showLandingPage, setShowLandingPage } = useAppContext();

  return (
    <PageWrapper>
      {showLandingPage && <Landing setShowLandingPage={setShowLandingPage} />}
      <Content />
    </PageWrapper>
  );
};

export default Home;

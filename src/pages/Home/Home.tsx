import PageWrapper from "@src/components/PagesContent/Layout/Page";
import Landing from "./components/Landing";
import Content from "./components/Content";

const Home = () => {
  return (
    <PageWrapper>
      <Landing />
      <Content />
    </PageWrapper>
  );
};

export default Home;

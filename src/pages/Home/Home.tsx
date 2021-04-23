import PageWrapper from "@src/components/PagesContent/Layout/Page";
import Content from "./components/Content";

const Home = () => {
  return (
    <PageWrapper withSubNavigation={false}>
      <Content />
    </PageWrapper>
  );
};

export default Home;

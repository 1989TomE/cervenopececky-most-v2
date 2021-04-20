import { Header } from "@src/components/TextContent";
import { homePages, pages } from "@src/pages";
import { useLocation } from "react-router";

const ContentHeader = () => {
  const location = useLocation();

  const header =
    pages.find((page) => page.route === location.pathname)?.label ||
    homePages.find((homePage) => homePage.route === location.pathname)?.label ||
    "Nadpis stránky";

  return <Header title={header} />;
};

export default ContentHeader;

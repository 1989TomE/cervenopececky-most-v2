import { Header } from "@src/components/TextContent";
import { homePages, mainPages } from "@src/pages";
import { useLocation } from "react-router";

const PageHeader = () => {
  const location = useLocation();

  const header =
    mainPages.find((page) => page.route === location.pathname)?.label ||
    homePages.find((homePage) => homePage.route === location.pathname)?.label ||
    "Nadpis stránky";

  return <Header title={header} />;
};

export default PageHeader;

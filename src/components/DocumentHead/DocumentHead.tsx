import { Helmet } from "react-helmet";

const DocumentHead = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Červenopečecký mošt</title>
      <link rel="icon" href="../../assets/favicon.ico"></link>
    </Helmet>
  );
};

export default DocumentHead;

import { Helmet } from "react-helmet";

const DocumentHead = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Červenopečecký mošt</title>
      <meta
        name="description"
        content="Lokální prodej jablek, hrušek a moštu v Červených Pečkách"
      ></meta>
      <link rel="icon" href="../../assets/leaf_red.svg"></link>
    </Helmet>
  );
};

export default DocumentHead;

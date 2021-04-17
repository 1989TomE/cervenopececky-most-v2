import React from "react";
import DocumentHead from "./components/DocumentHead/DocumentHead";
import PageContainer from "./components/PageContainer/PageContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globals";

const App = () => {
  return (
    <React.StrictMode>
      <DocumentHead />

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageContainer />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

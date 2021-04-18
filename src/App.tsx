import React from "react";
import Head from "./components/DocumentHead/DocumentHead";
import PageContainer from "./components/PageContainer/PageContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globals";
import Landing from "./pages/Home/components/Landing";
import Routes from "./Routes";

const App = () => {
  return (
    <React.StrictMode>
      <Head />

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

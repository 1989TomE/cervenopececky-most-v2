import React from "react";
import Head from "./components/DocumentHead/DocumentHead";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globals";
import Routes from "./pages/Routes";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <React.StrictMode>
      <Head />

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextProvider>
          <Routes />
        </ContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

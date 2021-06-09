import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from "./theme/useTheme";
import { GlobalStyles } from "./theme/GlobalStyles";
import Routes from "./routes";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  // const history = createBrowserHistory();
  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);
  return (
    <>
      {themeLoaded && (
        <Router>
          <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Routes />
          </ThemeProvider>
        </Router>
      )}
    </>
  );
}

export default App;

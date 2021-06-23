/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from "./theme/useTheme";
import { GlobalStyles } from "./theme/GlobalStyles";
import Routes from "./routes";
import store from "./redux/index";
import "react-image-lightbox/style.css";
import { RootState } from "./redux/index.interface";

function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  // const history = createBrowserHistory();
  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);
  return (
    <Provider store={store}>
      {themeLoaded && (
        <Router>
          <ThemeProvider theme={selectedTheme}>
            <ToastContainer />
            <GlobalStyles />
            <Routes />
          </ThemeProvider>
        </Router>
      )}
    </Provider>
  );
}

export const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth,
  user: state.auth.token,
});

export default App;

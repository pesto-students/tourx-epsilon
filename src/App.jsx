/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "./theme/useTheme";
import { GlobalStyles } from "./theme/GlobalStyles";
import Routes from "./routes";
import ErrorFallback from "./components/Error/ErrorFallback";
import store from "./redux/index";
import ScrollToTop from "./utils/ScrollToTop";
import "react-image-lightbox/style.css";
// import { RootState } from "./redux/index.interface";

function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  // const history = createBrowserHistory();
  useEffect(() => {
    document.title = "TOURX | Explore the best";
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);
  // const myErrorHandler = (error: Error, info: { componentStack: sting }) => {
  //   console.log(error, info);
  // };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        {themeLoaded && (
          <Router>
            <ScrollToTop />
            <ThemeProvider theme={selectedTheme}>
              <GlobalStyles />
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Routes />
              </ErrorBoundary>
            </ThemeProvider>
          </Router>
        )}
      </Provider>
    </ErrorBoundary>
  );
}

export const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  user: state.auth.token,
});

export default App;

import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { createBrowserHistory } from "history";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const history = createBrowserHistory();

Sentry.init({
  dsn: "https://a24a1f9f37254da28cae7ee56e5f96f7@o859938.ingest.sentry.io/5820830",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1,
});

const ProfileApp = Sentry.withProfiler(App);

ReactDOM.render(
  <Sentry.ErrorBoundary fallback="An error has occurred">
    <React.StrictMode>
      <ProfileApp />
    </React.StrictMode>
  </Sentry.ErrorBoundary>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

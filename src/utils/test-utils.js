/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";
import { render as rtlRender } from "@testing-library/react";
// import { renderHook as rtlRenderHooks } from "@testing-library/react-hooks";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import * as themes from "../theme/schema.json";
import reducer from "../redux/rootReducer";
// import defaultStore from "../redux/defaultStore";

function render(ui, options = {}) {
  const {
    initialState = {},
    store = createStore(reducer, initialState),
    theme,
    ...renderOptions
  } = options;

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themes.data.light}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// function renderHookWithRedux(callback, options = {}) {
//   const { initialState = defaultStore, store = createStore(reducer, initialState), ...others } = options

//   const returned = rtlRenderHooks(callback, {
//     ...others,
//     // eslint-disable-next-line react/display-name
//     wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
//   })

//   return {
//     ...returned,
//     store
//   }
// }

// re-export everything
export * from "@testing-library/react";
// override render method
export { render, rtlRender as renderHook };

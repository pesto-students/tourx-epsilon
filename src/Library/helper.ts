import React from "react";
import { capitalize } from "lodash";

/* eslint-disable no-control-regex */
export default (inp: string): string => {
  if (!inp) {
    return inp;
  }

  const toRet: string = inp
    .toString()
    .replace(/[^\u0000-\u00ff]/, "")
    .replace(/[\x1D]/g, "")
    .toLowerCase()
    .trim();

  return capitalize(toRet);
};

export const getDefaultHeaders = () => {
  const token = localStorage.getItem("AuthToken") || "";

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export function useNetwork() {
  const [isOnline, setNetwork] = React.useState(window.navigator.onLine);
  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };
  React.useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);
    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });
  return isOnline;
}

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

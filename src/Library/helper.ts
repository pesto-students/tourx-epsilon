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

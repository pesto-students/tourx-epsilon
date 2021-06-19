import React from "react";
import { CircularProgress } from "@material-ui/core";
import { Conatiner } from "./Style";

function Loader() {
  return (
    <Conatiner>
      <CircularProgress />
    </Conatiner>
  );
}

export default Loader;

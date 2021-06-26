import React from "react";
import { LinearProgress } from "@material-ui/core";
import { Conatiner } from "./Style";
import { Image } from "../About/style";
import Logo from "../../static/logo.png";

function Loader() {
  return (
    <Conatiner>
      <Image src={Logo} alt="Logo" />
      <LinearProgress style={{ width: "100px", marginTop: "12px" }} />
    </Conatiner>
  );
}

export default Loader;

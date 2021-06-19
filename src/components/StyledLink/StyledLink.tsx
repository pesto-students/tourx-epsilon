import React from "react";
import Link from "./style";

interface LinkProps {
  to: string;
  children: JSX.Element;
}

const StyledLink = (props: LinkProps): JSX.Element => {
  const { to, children } = props;
  return <Link to={to}>{children}</Link>;
};

export default StyledLink;

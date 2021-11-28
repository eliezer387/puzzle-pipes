import React from "react";
import { StyledButton } from "./styles";

const Button = (props: any) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

import React from "react";
import Aux from "../../hoc/Aux";
import { MainContainer, Toolbar } from "./Layout.style";

const layout = props => (
  <Aux>
    <Toolbar>UltraDiviner</Toolbar>
    <MainContainer>{props.children}</MainContainer>
  </Aux>
);
export default layout;

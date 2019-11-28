import React from "react";

import { ButtonContainer } from "./custom-buttom.style";

const CustomButton = ({ children, ...otherProps }) => (
  <ButtonContainer {...otherProps}>{children}</ButtonContainer>
);
export default CustomButton;

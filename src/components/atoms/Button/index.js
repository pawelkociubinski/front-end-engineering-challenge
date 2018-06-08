/* @flow */
// Dependencies
import type { Node } from "react";
import React from "react";
import { noop } from "lodash";
import { ThemeProvider } from "styled-components";
// Styles
import themes, { StyledButton } from "./styles";

type Props = {|
  +children: Node,
  +onClick: () => void,
  +theme: string,
  +disabled: boolean,
|}

const Button = (props: Props) => {
  const { children, onClick, theme, disabled } = props;

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledButton
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};

Button.defaultProps = {
  theme: "primary",
  onClick: noop,
};

export default Button;

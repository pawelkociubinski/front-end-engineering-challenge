/* @flow */
// Dependencies
import React from "react";
import { noop } from "lodash";
// Styles
import { Container, StyledTextField } from "./styles";

type Props = {|
  +name?: string,
  +onChange?: (event: Event) => void,
  +readOnly?: boolean,
  +required?: boolean,
  +type?: string,
  +value: string,
|};

const TextField = (props: Props) => {
  const { onChange, readOnly, value, type, name, required } = props;

  return (
    <Container>
      <StyledTextField
        name={name}
        required={required}
        onChange={onChange}
        readOnly={readOnly}
        type={type}
        value={value}
      />
    </Container>
  );
};

export default TextField;

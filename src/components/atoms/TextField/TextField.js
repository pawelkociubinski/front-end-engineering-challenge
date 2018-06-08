/* @flow */
// Dependencies
import React from 'react';
import { noop } from 'lodash';
// Custom
import Icon from '../Icon';
// Styles
import { Container, StyledTextField, Loupe, Close } from "./styles";

type Props = {|
  +name?: string,
  +onChange?: (event: Event) => void,
  +readOnly?: boolean,
  +required?: boolean,
  +type?: string,
  +value: string,
  +searchable?: boolean,
  +handleRemove?: () => void,
|};

const TextField = (props: Props) => {
  const { onChange, readOnly, value, type, name, required, searchable, handleRemove } = props;

  return (
    <Container>
      {searchable &&
        <Loupe
          icon="loupe"
          size={16}
        />}
      <StyledTextField
        name={name}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
        searchable={searchable}
        type={type}
        value={value}
      />
      {searchable &&
        <Close onClick={handleRemove}>
          <Icon
            icon="close"
            size={16}
          />
        </Close>}
    </Container>
  );
};

export default TextField;

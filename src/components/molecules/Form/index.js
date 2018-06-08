/* @flow */
// Dependencies
import React, { Fragment } from 'react';
// Custom
import TextField, { GroupedTextFields } from '../../atoms/TextField';
import Button from '../../atoms/Button';
// Styles
import { Submit } from "./styles";

type Props = {
  username: string,
  password: string,
  onChange: any,
  onSubmit: any,
}

const Form = (props: Props) => {
  const { username, password, onChange, onSubmit } = props;
  const disabled = !username || !password;

  return (
    <Fragment>
      <GroupedTextFields>
        <TextField
          required
          name="username"
          value={username}
          type="text"
          onChange={onChange}
        />
        <TextField
          required
          name="password"
          value={password}
          type="password"
          onChange={onChange}
        />
      </GroupedTextFields>
      <Submit>
        <Button disabled={disabled} onClick={onSubmit}>Sign In</Button>
      </Submit>
    </Fragment>
  );
}

export default Form;

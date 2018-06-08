/* @flow */
// Dependencies
import React from 'react';
// Styles
import { Email } from './styles';

type Props = {|
  +email: string,
|}

const ShowProfile = (props: Props) => {
  const { email } = props;

  return (
    <Email>{email}</Email>
  );
}

export default ShowProfile;

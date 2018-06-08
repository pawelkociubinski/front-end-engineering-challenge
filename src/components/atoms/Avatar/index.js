/* @flow */
// Dependencies
import React, { Fragment } from 'react';
// Styles
import { Unknown, Initials } from './styles';

type Props = {|
  +initials: ?string,
  +small?: boolean,
|}

const Avatar = (props: Props) => {
  const { initials, small } = props;

  return (
    <Fragment>
      {initials
        ? <Initials small={small}>{initials}</Initials>
        : <Unknown icon="profile" />}
    </Fragment>
  )
}

export default Avatar;

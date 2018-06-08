/* @flow */
// Dependencies
import React, { Fragment } from 'react';
// Custom
import { Container } from './styles';

type Props = {|
  +navigation: React$Element<*>,
  +routes: Array<React$Element<*>>,
|}

const Layout = (props: Props) => {
  const { navigation, routes } = props;

  return (
    <Fragment>
      {navigation}
      {routes}
    </Fragment>
  );
};

export default Layout;

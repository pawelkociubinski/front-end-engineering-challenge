/* @flow */
// Dependencies
import React, { PureComponent } from 'react';
// Styles
import { Center } from './styles';

class Link extends PureComponent<any, void> {
  _handleClick = (): void => {
    const { changeRoute, route } = this.props;

    changeRoute(route);
  }

  render () {
    const { children } = this.props;

    return (
      <Center onClick={this._handleClick}>{children}</Center>
    );
  }
}

export default Link;

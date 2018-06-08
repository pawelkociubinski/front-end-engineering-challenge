/* @flow */
// Dependencies
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
// Custom
import Browse from '../Browse';
import HomePage from '../HomePage';
import Layout from '../../components/templates/Layout';
import Login from '../Login';
import Navigation from '../../components/molecules/Navigation';
import Profile from '../Profile';
// Selectors
import { authenticationSelector, userSelector } from '../../selectors';
// Constants
import * as routes from '../../constants/routes';
// Types
import type { PathType } from '../../constants/routes';
import type { User } from '../../types/models';

type Props = {|
  +isAuthenticated: boolean,
  +push: (route: string) => void,
  +user: User,
|}

class App extends PureComponent<Props, void> {
  _changeRoute = (route: PathType): void => {
    const { push } = this.props;

    push(route);
  }

  render () {
    const { isAuthenticated, user } = this.props;

    const paths = [{
      path: routes.HOME_PAGE,
      exact: true,
      component: <HomePage />,
      redirect: <Redirect to={routes.LOGIN} />,
      condition: isAuthenticated,
    }, {
      path: routes.PROFILE,
      exact: false,
      component: <Profile />,
      redirect: <Redirect to={routes.LOGIN} />,
      condition: isAuthenticated,
    }, {
      path: routes.BROWSE,
      exact: false,
      component: <Browse />,
      redirect: <Redirect to={routes.LOGIN} />,
      condition: true,
    }, {
      path: routes.LOGIN,
      exact: false,
      component: <Login />,
      redirect: <Redirect to={routes.HOME_PAGE} />,
      condition: !isAuthenticated,
    }];

    const links = [{
      label: 'browse',
      route: routes.BROWSE,
    }];


    return (
      <Layout
        navigation={
          <Navigation
            changeRoute={this._changeRoute}
            user={user}
            links={links}
          />}
        routes={
          paths.map((item, index) => {
          const { component, condition, path, redirect, exact } = item;
          return (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={() => condition ? component : redirect}
            />
          );
        })}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const isAuthenticated = authenticationSelector(state);
  const user = userSelector(state);
  return {
    isAuthenticated,
    user,
  }
}

export default withRouter(connect(mapStateToProps, {
  push
})(App));

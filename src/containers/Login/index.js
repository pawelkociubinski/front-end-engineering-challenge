/* @flow */
// Dependencies
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Custom
import Container from '../../components/atoms/Container';
import UserBox from '../../components/organisms/UserBox';
import Form from '../../components/molecules/Form';
// Actions
import { login } from '../../actions';
// Types
import type { LoginUserRequestEvent } from '../../types/actions';

type Props = {|
  +login: (username: string, password: string) => LoginUserRequestEvent,
|}

type State = {|
  username: string,
  password: string,
|}

class Login extends PureComponent<Props, State> {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  _handleChange = (event: any): void => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });

  }

  _handleSubmit = (): void => {
    const { login } = this.props;
    const { username, password } = this.state;

    login(username, password);
  }

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <UserBox
          title="Sign In"
          content={
            <Form
              username={username}
              password={password}
              onSubmit={this._handleSubmit}
              onChange={this._handleChange}
            />}
        />
      </Container>
    );
  }
}

export default connect(null, {
  login,
})(Login);

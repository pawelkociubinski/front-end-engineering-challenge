/* @flow */
// Dependencies
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Custom
import Container from '../../components/atoms/Container';
import UserBox from '../../components/organisms/UserBox';
import ShowProfile from '../../components/molecules/ShowProfile';
// Selectors
import { userSelector } from "../../selectors";

class Profile extends PureComponent<any, void> {
  render() {
    const { user } = this.props;
    return (
      <Container>
        <UserBox
          initials={user.initials}
          title={user.fullName}
          content={<ShowProfile email={user.email} />}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const user = userSelector(state);
  return {
    user,
  }
}

export default connect(mapStateToProps)(Profile);

/* @flow */
// Dependencies
import React from 'react';
// Custom
import { Container, H1 } from './styles';
// Types
import type { User } from '../../../types/models';

type Props = {
  user: User,
}

const Hero = (props: Props) => {
  const { user } = props;

  return (
    <Container>
      <H1>Welcome Back, {user && user.first_name}</H1>
    </Container>
  )
}

export default Hero;

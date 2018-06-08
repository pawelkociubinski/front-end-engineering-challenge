/* @flow */
// Dependencies
import React from 'react';
// Custom
import Hero from '../../components/atoms/Hero';
// Types
import type { User } from '../../types/models';

type Props = {
  user: User,
}

const HomePage = (props: Props) => {
  const { user } = props;
  return <Hero user={user} />;
}

export default HomePage;

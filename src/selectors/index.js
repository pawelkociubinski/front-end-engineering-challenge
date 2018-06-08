/* @flow */
import { createSelector } from 'reselect';
import { isEmpty, head, toUpper, join } from 'lodash';
// Types
import type { User, State } from '../types/models';

const getUser = (state: State): ?User => state.authReducer.user;

export const authenticationSelector = createSelector(
  getUser,
  (user: User): boolean => !isEmpty(user),
);

export const userSelector = createSelector(
  getUser,
  (user: User): User => {
    const initials = user && toUpper(join([head(user.first_name), head(user.last_name)], ""));
    const fullName = user && join([user.first_name, user.last_name], " ");
    return {
      ...user,
      initials,
      fullName,
    }
  },
);

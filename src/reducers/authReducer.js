/* @flow */
// Types
import type { AuthAction } from '../types/actions';
import type { AuthModel } from '../types/models';
// Constants
import * as actions from '../constants/actions';

const initialState = {
  user: null,
  inProgress: false,
  error: false,
};

const authReducer = (state: AuthModel = initialState, action: AuthAction) => {
  switch (action.type) {
    case actions.FETCH_USER_STARTED: {
      return { ...state, inProgress: true };
    }

    case actions.FETCH_USER_SUCCEEDED: {
      return { ...state, user: action.payload.user };
    }

    case actions.FETCH_USER_FINISHED: {
      return { ...state, inProgress: false };
    }

    case actions.FETCH_USER_FAILED: {
      return { ...state, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default authReducer;

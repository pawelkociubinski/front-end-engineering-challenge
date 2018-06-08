
/* @flow */
// Types
import type { AppAction } from '../types/actions';
import type { AppModel } from '../types/models';
// Constants
import * as actions from '../constants/actions';

export const initialState = {
  searchedPhrase: '',
};

const appReducer = (state: AppModel = initialState, action: AppAction) => {
  switch (action.type) {
    case actions.CHANGE_SEARCHED_PHRASE: {
      return { ...state, searchedPhrase: action.payload.searchedPhrase };
    }

    case actions.CLEAR_SEARCHED_PHRASE: {
      return { ...state, searchedPhrase: '' };
    }

    default:
      return state;
  }
};

export default appReducer;

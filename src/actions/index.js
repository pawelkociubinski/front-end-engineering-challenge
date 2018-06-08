/* @flow */
// Dependencies
import { push } from 'react-router-redux';
// Constants
import * as actions from '../constants/actions';
// Types
import type { LoginUserRequestEvent, SearchPhraseRequestEvent } from '../types/actions';

export const login = (username: string, password: string): LoginUserRequestEvent => ({
  type: actions.LOGIN_USER_REQUESTED,
  payload: { username, password },
});

export const searchPhrase = (searchedPhrase: string): SearchPhraseRequestEvent => ({
  type: actions.SEARCH_PHRASE_REQUESTED,
  payload: { searchedPhrase },
});

export const clearSearch = () => ({
  type: actions.CLEAR_SEARCHED_PHRASE,
});

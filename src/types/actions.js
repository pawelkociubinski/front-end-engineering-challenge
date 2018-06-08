/* @flow */
import type { Document, User } from './models';

export type LoginUserRequestEvent = {|
  type: 'LOGIN_USER_REQUESTED',
  payload: {|
    username: string,
    password: string,
  |}
|}

export type SearchPhraseRequestEvent = {|
  type: 'SEARCH_PHRASE_REQUESTED',
  payload: {|
    searchedPhrase: string,
  |}
|}

export type FetchDocumentsStartEvent = {|
  type: 'FETCH_DOCUMENTS_STARTED',
|}

export type FetchDocumentsFinishEvent = {|
  type: 'FETCH_DOCUMENTS_FINISHED',
|}

export type FetchDocumentsSuccessEvent = {|
  type: 'FETCH_DOCUMENTS_SUCCEEDED',
  payload: {|
    documents: Array<Document>,
  |}
|}

export type FetchDocumentsFailEvent = {|
  type: 'FETCH_DOCUMENTS_FAILED',
  payload: {|
    error: boolean,
  |}
|}

export type DocumentAction =
  FetchDocumentsStartEvent
  | FetchDocumentsFinishEvent
  | FetchDocumentsSuccessEvent
  | FetchDocumentsFailEvent


export type ChangeSearchedPhraseEvent = {|
  type: 'CHANGE_SEARCHED_PHRASE',
  payload: {|
    searchedPhrase: string,
  |}
|}

export type ClearSearchedPhraseEvent = {|
  type: 'CLEAR_SEARCHED_PHRASE',
|}

export type AppAction =
  | ChangeSearchedPhraseEvent
  | ClearSearchedPhraseEvent

export type FetchUserStartEvent = {|
  type: 'FETCH_USER_STARTED',
|}

export type FetchUserFinishEvent = {|
  type: 'FETCH_USER_FINISHED',
|}

export type FetchUserSuccessEvent = {|
  type: 'FETCH_USER_SUCCEEDED',
  payload: {|
    user: User,
  |}
|}

export type FetchUserFailEvent = {|
  type: 'FETCH_USER_FAILED',
  payload: {|
    error: string,
  |}
|}

export type AuthAction =
  FetchUserStartEvent
  | FetchUserFinishEvent
  | FetchUserSuccessEvent
  | FetchUserFailEvent

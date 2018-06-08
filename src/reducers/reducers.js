/* @flow */
// Dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Custom
import appReducer from './appReducer';
import authReducer from './authReducer';
import documentsReducer from './documentsReducer';

export default combineReducers({
  appReducer,
  authReducer,
  documentsReducer,
  routerReducer,
});

// Dependencies
import { all, fork } from 'redux-saga/effects';
// Sagas
import authSaga from './authSaga';
import documentsSaga from './documentsSaga';
import searchSaga from './searchSaga';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(documentsSaga),
    fork(searchSaga),
  ]);
}

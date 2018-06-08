// Dependencies
import { takeLatest, put, call } from 'redux-saga/effects';
// Custom
import { api } from '../helpers/api';
import * as actions from '../constants/actions';

function* getDocuments(action) {
  try {
    yield put({ type: actions.FETCH_DOCUMENTS_STARTED });

    const documents = yield call(api.get, action.payload.searchedPhrase);

    yield put({
      type: actions.FETCH_DOCUMENTS_SUCCEEDED,
      payload: { documents },
    });

    yield put({ type: actions.FETCH_DOCUMENTS_FINISHED });
  } catch (error) {
    yield put({ type: actions.FETCH_DOCUMENTS_FAILED, payload: { error: true } });

    yield put({ type: actions.FETCH_DOCUMENTS_FINISHED });
  }
}

export default function* repositoriesSaga() {
  yield takeLatest(actions.FETCH_DOCUMENTS_REQUESTED, getDocuments);
}

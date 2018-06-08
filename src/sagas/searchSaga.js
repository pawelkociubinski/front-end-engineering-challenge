// Dependencies
import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { isEmpty } from 'lodash';
// Custom
import * as actions from '../constants/actions';

function* handleSearch(action) {
  yield put({
    type: actions.CHANGE_SEARCHED_PHRASE,
    payload: { searchedPhrase: action.payload.searchedPhrase },
  });

  yield delay(1000);

  yield put({
    type: actions.FETCH_DOCUMENTS_REQUESTED,
    payload: { searchedPhrase: action.payload.searchedPhrase },
  });
}

export default function* searchSaga() {
  yield takeLatest(actions.SEARCH_PHRASE_REQUESTED, handleSearch);
}

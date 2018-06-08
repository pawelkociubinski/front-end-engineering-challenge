// Dependencies
import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
// Custom
import { api } from 'helpers/api';
// Constants
import * as actions from '../constants/actions';
import * as routes from '../constants/routes';

function* getUser(action) {
  try {
    yield put({ type: actions.FETCH_USER_STARTED });

    const user = yield call(api.post, {
      username: action.payload.username,
      password: action.payload.password,
    });

    yield put({ type: actions.FETCH_USER_SUCCEEDED, payload: { user } });

    yield put({ type: actions.FETCH_USER_FINISHED });

    yield put(push(routes.PROFILE));
  } catch (error) {
    yield put({ type: actions.FETCH_USER_FAILED, payload: { error: true } });

    yield put({ type: actions.FETCH_USER_FINISHED });
  }
}

export default function* authSaga() {
  yield takeLatest(actions.LOGIN_USER_REQUESTED, getUser);
}

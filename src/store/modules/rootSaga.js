import { all } from 'redux-saga/effects';

import questions from './questions/sagas';

export default function* rooSaga() {
  return yield all([questions]);
}

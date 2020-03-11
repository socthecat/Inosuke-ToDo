import { fork } from 'redux-saga/effects'

import { watchStarships } from './watchers'

export default function * rootSaga () {
  yield fork(watchStarships)
}

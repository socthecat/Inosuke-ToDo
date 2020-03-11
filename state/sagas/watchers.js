import { takeLatest, all } from 'redux-saga/effects'

import starshipsSaga from './starshipsSaga'

import { todos } from '../constants'

function * watchStarships () {
  yield all([
    takeLatest(todos.FETCH_ITEMS, starshipsSaga.getStarships)
  ])
}

export {
  watchStarships
}

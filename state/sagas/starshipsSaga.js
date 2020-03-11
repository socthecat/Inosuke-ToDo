import { call, put } from 'redux-saga/effects'

import services from '../services/index'

import { todos } from '../constants'

function * getStarships () {
  try {
    const response = yield call(services.getStarships)
    yield put({ type: todos.FETCH_ITEMS_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: todos.FETCH_ITEMS_ERROR, payload: error })
  }
}

export default { getStarships }

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import reducers from '../reducers'
import { todos } from '../actions'
const { fetchItems } = todos

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

if (store.getState().todos.length === 0) {
  store.dispatch(fetchItems())
}

export default store

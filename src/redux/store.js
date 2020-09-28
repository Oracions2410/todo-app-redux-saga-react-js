import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga'
import reducer from './reducers'
import { loadTodoList } from './actions'

const saga = createSagaMiddleware()

const middleware = [saga]

const store = createStore(combineReducers({ todos: reducer }), composeWithDevTools(applyMiddleware(...middleware)))

saga.run(rootSaga)

store.dispatch(loadTodoList())

export default store
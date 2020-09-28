import { call, takeEvery, put, all } from 'redux-saga/effects'

import { RENDER_TODO_ACTION, LOAD_TODO_ACTION } from '../actions'

export function* fetchTodoList() {
    const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json'
    const response = yield call(fetch, endpoint)
    const data = yield response.json()
    yield put({ type: RENDER_TODO_ACTION, payload: data })
}

export function* loadTodoList() {
    yield takeEvery(LOAD_TODO_ACTION, fetchTodoList)
}

export default function* rootSaga() {
    yield all([loadTodoList()])
}
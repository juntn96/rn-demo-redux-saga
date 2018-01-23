import getTodos from '../../api/getTodos'
import * as types from '../actions/types'
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { fetchingItem, fetchSuccess, fetchFailed } from '../actions/todoActions'

const fetchTodo = function* (   ) {
    try {
        const todos = yield getTodos()
        yield put(fetchSuccess(todos))
    }
    catch (error) {
        yield put(fetchFailed())
    }
}

const fetchWatcher = function* () {
    yield all([
        takeLatest(types.FETCHING, fetchTodo)
    ])
}

export default [
    fetchWatcher
]
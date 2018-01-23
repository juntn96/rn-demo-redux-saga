import * as types from './types'

export const addItem = (item) => {
    return {
        type: types.ADD,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: types.REMOVE,
        payload: item
    }
}

export const fetchingItem = () => {
    return {
        type: types.FETCHING
    }
}

export const fetchSuccess = (todos) => {
    return {
        type: types.FETCH_SUCCESS,
        payload: todos
    }
}

export const fetchFailed = () => {
    return {
        type: types.FETCH_FAILED
    }
}
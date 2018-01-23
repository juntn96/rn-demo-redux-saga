import * as types from '../actions/types'

const initialState = {
    todos: [],
    loading: false,
    error: false
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD: {
            const item = action.payload
            let todos = state.todos
            let isNew = true
            const lastId = todos[todos.length - 1].id
            todos = todos.slice(0, todos.length - 1)
            todos.map((it, index) => {
                if (it.id === item.id) {
                    todos[index].content = item.content
                    isNew = false
                }
            })
            if (isNew) {
                todos.push(action.payload)
            }
            todos.push({ id: lastId + 1, content: null })
            return {
                ...state,
                todos
            }
        }

        case types.REMOVE: {
            const item = action.payload
            let todos = state.todos
            const delIndex = todos.indexOf(item)
            todos.splice(delIndex, 1)
            return {
                ...state,
                todos
            }
        }

        case types.FETCHING: {
            return {
                ...state,
                loading: true
            }
        }

        case types.FETCH_SUCCESS: {
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        }

        case types.FETCH_FAILED: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        default: {
            return state
        }
    }
}

export default todoReducer
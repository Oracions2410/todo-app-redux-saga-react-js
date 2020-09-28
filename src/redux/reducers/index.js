import { ADD_TODO_ACTION, RENDER_TODO_ACTION } from '../actions'

const initialState = []

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case ADD_TODO_ACTION:
            return [...state, payload]

        case RENDER_TODO_ACTION:
            return [...state, ...payload]

        default:
            return state
    }
}
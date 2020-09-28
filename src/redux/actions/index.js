export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const LOAD_TODO_ACTION = 'LOAD_TODO_ACTION'
export const RENDER_TODO_ACTION = 'RENDER_TODO_ACTION'


export function addTodoAction(title) {
    return {
        type: ADD_TODO_ACTION,
        payload: {
            _id: new Date().getTime(),
            title
        }
    }
}

export function loadTodoList() {
    return {
        type: LOAD_TODO_ACTION
    }
}
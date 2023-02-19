import { SUBMIT_TODO_INPUT, TODO_INPUT } from "./constants"

const initState = {
    todo: [],
    todoInput: ''
}

const reducer = (state, action) => {
    console.log(state, action, '123123123')
    switch(action.type) {
        case TODO_INPUT:
        return {
            ...state,
            todoInput: action.payload
        }
        case SUBMIT_TODO_INPUT:
            return {
                ...state,
                todo: [...state.todo, action.payload],
                todoInput: ''
            }
        default:
            throw new Error('Invail input')
    }
}

export { initState }
export default reducer
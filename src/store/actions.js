import { SUBMIT_TODO_INPUT, TODO_INPUT } from "./constants";

export const setTodoInput = payload => ({
    type: TODO_INPUT,
    payload
})

export const submitTodoInput = payload => ({
    type: SUBMIT_TODO_INPUT,
    payload
})
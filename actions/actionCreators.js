import { LOAD_GOALS, ADD_GOAL, COMPLETE_GOAL, DELETE_GOAL } from '../actions/actionTypes'

export function loadTodos(todos) {
  return { type: LOAD_GOALS, payload: goals }
}

export function addTodo() {
  return { type: ADD_GOAL, id: id, title: title }
}

export function toggleTodo(index) {
  return { type: COMPLETE_GOAL, index: index }
}

export function deleteTodo(index) {
  return { type: DELETE_GOAL, index: index }
}
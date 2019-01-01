//Example ACTION represents adding a new todo item
//ACTION TYPES
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILTY_FILTER = 'SET_VISIBILTY_FILTER'

//CONSTANTS
export const VisibleFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//ACTION CREATORS
export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

export function setVisibleFilter(filter) {
  return type: SET_VISIBILTY_FILTER, filter
}

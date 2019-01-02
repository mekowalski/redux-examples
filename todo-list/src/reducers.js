import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'

//Explore Reducer Composition
const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

//Splitting Reducers
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

//Reducer Composition
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

//Rewrite main reducer as a function that calls the REDUCERS managing parts of the STATE
//Then combines them into a single object
//Doesn't need to know complete initial STATE anymore
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
//1. not mutating STATE, create copy with Object.assign()
//2. Return previous STATE in default case
//Never write directly to STATE or its fields, instead return new objects
//New todos is equal to Old todos concatenated with single new item at end (...state.todos)
//todos alsi accepts STATE but STATE is an array
//todoApp gives todos a slice of the STATE to manage and todos knows how to update just that slice
//This is REDUCER COMPOSITION, fundamental patter of building Redux apps

import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'
import { combineReducers } from 'redux'

//Explore Reducer Composition
const { SHOW_ALL } = VisibilityFilters

//combineReducers()
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

//Reducer Composition
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
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

//Log initial state
console.log(store.getState())

export default todoApp

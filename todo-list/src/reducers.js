import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'

//Explore Reducer Composition
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      retutn state
  }
}

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

//ES6 syntax
//Now handle SET_VISIBILITY_FILTER action
//Change visibilityFilter on the state
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object,assign({}, state, {
        todos: todos(state.todos, action)
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })
    default:
      return state
  }
}
//1. not mutating STATE, create copy with Object.assign()
//2. Return previous STATE in default case
//Never write directly to STATE or its fields, instead return new objects
//New todos is equal to Old todos concatenated with single new item at end (...state.todos)
//todos alsi accepts STATE but STATE is an array
//todoApp gives todos a slice of the STATE to manage and todos knows how to update just that slice
//This is REDUCER COMPOSITION, fundamental patter of building Redux apps

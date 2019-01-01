import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
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
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
      case TOGGLE_TODO:
        return Object.assign({}, state, {
          todos: state.todos.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
            return todo
          })
        })
    default:
      return state
  }
}
//1. not mutating STATE, create copy with Object.assign()
//2. Return previous STATE in default case
//Never write directly to STATE or its fields, instead return new objects
//New todos is equal to Old todos concatenated with single new item at end (...state.todos)

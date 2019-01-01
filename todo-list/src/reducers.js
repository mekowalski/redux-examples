import { VisibilityFilters } from './actions'

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
    default:
      return state
  }
}
//1. not mutating STATE, create copy with Object.assign()
//2. Return previous STATE in default case

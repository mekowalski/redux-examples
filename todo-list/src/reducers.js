import { VisibilityFilters } from './actions'

const initialState = {
  VisibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  //for now don't handle actions just return given state
  return state
}

//ES6 syntax
function todoApp(state = initialState, action) {
  //for now don't handle actions just return given state
  return state
}

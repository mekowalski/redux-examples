//Example ACTION represents adding a new todo item
const ADD_TODO = 'ADD_TODO'

{
  type: ADD_TODO.
  text: 'Build my first Redux App'
}

//add another action to complete todo item
//refer to specific todo item by INDEX
//in real app it's wiser to generate unique ID every time a new item is created
{
  type: TOGGLE_TODO,
  index: 5
}

//add another action to change current visible todos
{
  type: SET_VISIBILTY_FILTER.
  fitler: SHOW_COMPLETED
}

//action creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

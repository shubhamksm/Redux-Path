/*
  Actions are payloads of information that send data from the application to the store. They are the only source of information for the store.

  Actions are plain JS objects with type property that indicates the action being performed. Types should be defined as strings. Other than type, the structure of an action object is fluid.

  Once the app is large enough, all string constants can be moved into a separate module, and only the required constants can be imported.

  Example:

  export const ADD_TODO = 'ADD_TODO'

  import { ADD_TODO } from './actionTypes'
*/

// Define Action Types
/*
  All action types should be defined as strings.


  const ADD_TODO = 'ADD_TODO';
  const TOGGLE_TODO = 'TOGGLE_TODO';
  const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
*/

// Define Action Objects
/*
  Other than type, the structure of an action object could be defined as required.

  Action type for adding a new todo item
    {
      type: ADD_TODO,
      text,
    }
  To describe a user ticking off a todo as completed
    {
      type: TOGGLE_TODO,
      index: 5,
    }
  For changing the currently visible todos
    {
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_COMPLETED,
    }
*/

// Define Action Creators
/*
  Action Creators are functions that create actions. In Redux, action creators simply return an action object.

  Action Creators in ToDo App:

    function addTodo(text) {
      return { type: ADD_TODO, text };
    }

    function toggleTodo(index) {
      return { type: TOGGLE_TODO, index };
    }

    function setVisibilityFilter(filter) {
      return { type: SET_VISIBILITY_FILTER, filter };
    }
*/

// Dispatching Action
/*
  In Redux, to initiate a dispatch, the result of action creater is passed on to the dispatch() function.

  Example:

    dispatch(addTodo(text))

  Alternatively, a bound action creator that automatically dispatches can be created:

    const boundAddTodo = (text) => dispatch(addTodo(text))
*/

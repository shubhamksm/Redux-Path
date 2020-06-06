// Spliting Reducers
/*
  Defining Reducers for all actions in a single function could make the code verbose and hard to comprehend. This is where Splitting of Reducers will come in handy!

  Certain state fields can be independently updated and hence can be split into separate functions. However, some state fields depend on one another and more consideration will be required.
*/

// Combining Reducers
/*
  When reducers are split into multiple functions, the main reducer can be simplified.

  Redux provides a utility called combineReducers() that generates a function that calls reducer functions with the slices of state selected according to their keys, and combining their results into a single object.

  It is important to note that:

  Each reducer function needs to handle a specific element of the state.
  Functions within combineReducer() need to be listed in the same order as in the state object definition.
*/

// Updating Reducers in TODO
/*
  In this app, ToDo list is independent of Visibility Filter, hence has been split into a separate reducer functions.

  function todos(state = intialTodos, action) {
  //Handles Add Todo and Toggle Todo
  }
  function visibilityFilter(state = intialFilter, action) {
  //Handles Filtering Todos
  }
  const todoApp = combineReducers({
      visibilityFilter,
      todos
  })
  Here you can notice that the todos function completely manages the todos and rest of the state does not matter for this function.

  This is called Reducer Composition, and it is the fundamental pattern of building Redux apps.
*/

// For Large Apps, it is recommended to split the reducers into separate files, keep them completely independent and manage different data domains.

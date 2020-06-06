/*
  Redux can be described in three fundamental principles:

  Single source of truth
  Read-only State
  Making Changes through pure functions
*/

// Single source of truth
/*
  The state of the whole application is stored in an object tree within a single store.

  Application state is persistent, making it easier to debug, or introspect an application.
*/

// Read only State
/*
  The only way to change the state is to dispatch an action.

  Actions describe the fact that something happened!
*/

// Changes through Pure Functions only
/*
  Pure functions called Reducers take care of state mutation or tranformation.

  Reducers take previous state, action as input, and return the next state of the application.

  Reducers specify how the application state changes in response to an action!
*/

// Benefits of Redux
/*
  Views can no longer update state directly, ensuring streamlined approach to update state.
  All changes are centralized and happen one by one in a strict order.
  Actions can be logged, serialized, stored, and later replayed for debugging or testing purposes.
  Features like Undo/Redo can be implemented in no time.
*/

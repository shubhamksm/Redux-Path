/*
  Storing all the data in one state object does not sound very modular. However, in Redux, modularity is achieved through functions.
  Instead of breaking the state up into different objects, functions are created to manage specific leaves and branches of this state tree.
  The idea of using functions for modularity comes from the functional programming paradigm.
  It is the functional programming paradigm that is used for developing Redux applications.

  Few important concepts of Functional Programming Paradigm to keep in mind:

    Pure functions
    Immutability
    Composition
*/

// Pure Function
/*
  Pure Functions are functions that do not cause side effects. Everything the function needs to operate is sent as arguments, and a new result is returned.

  Pure functions do not mutate any of their arguments or any global variables. They simply use the information to produce a new result.
*/

// Immutability
/*
  To mutate is to change, to be immutable is to be unchangeable.

  In functional programming, state variables and objects are never changed. Instead, new ones are produced.
*/

// Composition
/*
  Composition refers to the ability to put functions together in a way that one function's output becomes the next function's input.

  The values returned from one function become the arguments of the next function until eventually, the last function returns the value.

  In Redux, a composition is used in the store.

    The reducer functions that are created to manage specific parts of the state tree are composed. The action and state are sent as arguments and piped through each of these reducers until a state is eventually mutated.

    The developer does not have to worry about how reducers are composed. All they have to do, is to identify the state, write reducers, and let the Redux store handle the rest.
*/

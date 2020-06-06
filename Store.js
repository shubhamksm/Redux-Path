/*
  So far, we have defined the actions that represent the facts about what happened and the reducers that update the state according to those actions.

  The store is the object that brings them together.

  The store has the following responsibilities:

    Holds application state
    Allows access to state via getState()
    Allows state to be updated via dispatch(action)
    Registers listeners via subscribe(listener)
    Unregister listeners via function returned by subscribe(listener)
*/

// Redux applications always have a single store. Reducer Composition should be used to split data handling logic instead of many stores.

// Creating a Reducer
/*
  It is easy to create a store once a reducer is created. Just import the reducer, and pass it to createStore().

  createStore is used to build instances of stores in Redux and hence needs to be imported.

  import { createStore } from 'redux'

  let store = createStore(todoApp)
*/

// Testing the Store
/*
  Update the ToDo App to create a store:

  const { createStore } = Redux;

  let store = createStore(todoApp)
  console.log(store.getState())
  Observe the output in the Codepen console.

  Optionally, initial state can be sent as the second argument to createStore(). This is useful for hydrating the state of the client to match the state of a Redux application running on the server.

  let store = createStore(todoApp, window.STATE_FROM_SERVER)
*/

// Dispatching Action
/*
  Once the store is created, update logic can be tested by dispatching some actions,without an UI.

  For this, subscribe to the store. Once subscribed, every time a state changes, it gets logged.


    let unsubscribe = store.subscribe(() =>
        console.log(`
          ${JSON.stringify(store.getState())}
              `)
    )
*/

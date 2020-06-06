/*
  Application state structure needs to be taken into consideration before writing any function.

  In our ToDo App, we would want to store:

  Actual List of ToDo's
  Current Visibility Filter
  Most applications would be required to store data as well as UI State.

  It is advisable to keep data and UI state separate.
*/

// Initial State of the TODO app
/*
  Redux will call the reducer with an undefined state for the first time. This is when, the initial state of the app will be returned:

  Initial state Definition:

    const intialFilter = 'SHOW_ALL';
    const intialTodos = [
        {
          text: 'Pay Utility Bill',
          completed: true,
          id: 0
        },
        {
          text: 'Initiate Vendor Discussion',
          completed: false,
          id: 1
        }, 
    ]
*/

// Reducers
/*
  Now that we know, what initial state looks like, it is time to write reducers!

  Reducer is a pure function that takes the previous state, action, and returns the next state.

  (previousState, action) => newState
  It is very important that the reducer must be a pure function.
  It should be completely predictable i.e. calling it with the same inputs should produce the same outputs.

  // Avoid
    
  In a Reducer, do not:

    Mutate its arguments
    Perform side effects like API calls and routing transitions
    Call non-pure functions, like, Date.now() or Math.random()
    Given the same arguments, it should calculate the next state and return it.

    No surprises. No API calls. No mutations. Just a calculation.
*/

// Reducer for the TODO app
/*
    Now let us write the first reducer in ToDo App, for handling the action SET_VISIBILITY_FILTER.

    All it needs to do, is to change visibilityFilter on the state.

    Reducer to handle Visibility Filter:

    function todoApp(state = intialFilter, action) {
        switch (action.type) {
            case SET_VISIBILITY_FILTER:
                return action.filter,            
            default:
                return state
      }
    }
    Here, updated action filter is returned. Also, previous state is returned by default, so as to handle any unknown action.
*/

// Handling Add action
/*
  Reducer to handle the action ADD_TODO:

  function todos(state = intialTodos, action) {
    switch (action.type) {
      case ADD_TODO:
        return [...state,
          {
            text: action.text,
            completed: false,
            id: state.length,
          },
        ]; 
    }
  }
  Here, the spread operator ... of ES6 is used to add all existing todos, along with the new todo item, in the new todo list.
*/

// Handling toggle Action
/*
  Updating the reducer todos to handle the toggle action:

      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        });
  Here, a new empty state object is sent as a input to Object.assign. This ensures, the changes do not mutate the existing state.

  A new todo object is created, with the updated completion status.
*/

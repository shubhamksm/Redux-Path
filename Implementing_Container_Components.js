/*
  In this module we will learn how to create container components that connect the presentational components to Redux.

  Container Components can be generated using the connect() function provided by React Redux.

  connect is a higher order component that provides a convenient way to access the state and dispatch function.
*/

// Map State and Dispatch Functions
/*
  To use connect(), special functions called mapStateToProps and mapDispatchToProps need to be defined.

  mapStateToProps: every time the state is changed, mapStateToProps will be called with the new state. This function defines how to transform the current Redux store state to update the React component.

  mapDispatchToProps: This function helps components in dispatching actions triggered by the onClick, onChange events. This may cause change of application state.
*/

// Container Component for todo app
/*
  In the Todo App, following containers needs to be created.

  VisibleTodoList filters the todos according to the current visibility filter and renders a TodoList.
  FilterLink gets the current visibility filter and renders a Link.
  AddTodo which adds a new todo item on click of a button.
  These containers should subscribe to the Redux store, to get the state updates, and render the TodoList.
*/

// Map to state to Properties
/*
  Step 1: Define mapStateToTodoListProps which returns the filtered list of todo's.

  const mapStateToTodoListProps = (state) => ({
    todos: getVisibleTodos(state.todos, 
              state.visibilityFilter),
  });
  Note: getVisibleTodos is a selector, that needs to be defined.
*/

// Create the Selectors
/*
  In Redux, selectors are functions that are used to retrieve snippets of the Redux state for the React components.

  Step2 : Define getVisibleTodos Selector:

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    }
  };
*/

// Dispatching Actions from Container
/*
  Step 3: Define mapDispatchToTodoListProps function to trigger toggleTodo action when a user tries to mark a task to be completed.

  const mapDispatchToTodoListProps = (dispatch) => ({
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  });
*/

// Define OnClick Events
/*
  Step 4: Add OnClick event to the TodoList Function, so that a Toggle action is dispatched when a user clicks on a todo.

  const TodoList = ({ todos, onTodoClick }) => (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  );
*/

// Create Container
/*
  Step 5: Create Container for TodoList


  const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps,
  )(TodoList);
*/

// Test VisibleTodoList Container
/*
  Now we have created the first container VisbileToDoList. This will enable you to:

  View all todo list items
  Toggle to mark an item as complete or active
  Note: You still would not be able to add a new todo item or filter the list of todos by status.
*/

// Create FilterLink Container
/*
  Now, go ahead and write mapState and mapDispatch functions for the Filter Links and create a container.

  mapStateToFilterLinkProps will set the selected filter to be active.
  mapDispatchToFilterLinkProps will dispatch the action to set the visibility filter.
  FilterLink is the container which encompasses both the above functions.
  This should help you filter the todo items by status and display them.
*/

// Create AddToDo Container
/*
  Update AddTodo Function to dispatch an event OnClick of the Add todo Button and create a container for AddTodo:

  let AddTodo = ({ dispatch }) => {
    let input;
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
          Add todo
        </button>
      </div>
    );
  };

  AddTodo = connect()(AddTodo);
*/

// Update TodoApp Components
/*
  Update TodoApp Component with the VisibleTodoList, Footer and AddTodo Containers.

  const TodoApp = () => {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  };
*/

// Passing the Store
/*
  All container components need access to the Redux store so they can subscribe to it.

  Use React Redux component <Provider> to make the store available to all container components in the application. This needs to be done while rendering the root component.

  const { connect, Provider } = ReactRedux;

  const store = createStore(todoApp);

  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  );
*/

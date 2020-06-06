/*
  Redux has no relation to React. Redux apps can be written withReact, Angular, Ember, jQuery, or JavaScript.

  Having said that, Redux works especially well with libraries like React, as it describes UI as a function of state and Redux emits state updates in response to actions.
*/

// React bindings
/*
  React bindings are not included in Redux by default. They need to be imported explicitly using:

    const { connect, Provider } = ReactRedux;
  React bindings for Redux embrace the idea of separating presentational and container components.
*/

// Container Components
/*
  Presentational components decide how things look, Container Components connect to Redux store to take care of data fetching and state updates. Container components:

  Subscribe to Redux state to fetch data.
  Dispatch Redux Actions for data updates.
*/

// TODO App in ReactJs
/*
  Before getting started with creating container components, here is a simple ToDo App created using ReactJS.

  http://codepen.io/anon/pen/JWwzzP

  This App contains following presentational components:

  TodoList - a list showing visible todos.
  Todo - a single todo item.
  Link - a link with a callback to be invoked when link is clicked.
  Footer - lets the user change currently visible todos.
  AddTodo - with input field and a button to Add todo.
  TodoApp is the root component that renders everything else.
*/

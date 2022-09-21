import React from 'react';
import ControlTodo from './components/ControlTodo';
import TodoList from './components/TodoList';
import './style/App.sass'

function App() {
  return (
    <div className="app-body">
      <ControlTodo />
      <TodoList />
    </div>
  );
}

export default App;

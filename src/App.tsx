import { useState } from 'react';
//import 'bulma/css/bulma.min.css';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import './App.scss';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
export const App = () => {
  const [todos, setTodos] = useState(todosFromServer);

  const handleAddTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const todosWithUsers = todos.map(todo => ({
    ...todo,
    user: usersFromServer.find(user => user.id === todo.userId),
  }));

  <TodoList todos={todosWithUsers} />;

  return (
    <div className="section">
      <h1 className="title">Add todo form</h1>
      <TodoForm onAdd={handleAddTodo} />
    </div>
  );
};

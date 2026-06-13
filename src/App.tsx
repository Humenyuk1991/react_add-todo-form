import 'bulma/css/bulma.min.css';
import todos from './api/todos';
import './App.scss';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

export const App = () => {
  return (
    <div className="section">
      <h1 className="title">Add todo form</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

import React from 'react';
import type { Todo } from '../../api/todos';
//import { TodoInfo } from '../TodoInfo/TodoInfo';


type TodoListProps = {
  todos: Todo[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <div className="TodoList">
    {todos.map(currentTodo => (
      <article
        key={currentTodo.id}
        data-id={currentTodo.id}
        className={`TodoInfo ${currentTodo.completed ? 'TodoInfo--completed' : ''}`}
      >
        <p>ID: {currentTodo.id}</p>
        <h2 className="TodoInfo__title">{currentTodo.title}</h2>
        <p>User ID: {currentTodo.userId}</p>
      </article>
    ))}
  </div>
);

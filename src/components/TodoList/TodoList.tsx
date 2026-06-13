import type { Todo } from '../../api/todos';

type TodoListProps = {
  todos: Todo[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <tbody>
    {todos.map(todo => (
      <article
        key={todo.id}
        data-id={todo.id}
        className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
      >
        <td>{todo.id}</td>
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <p>User ID: {todo.userId}</p>
      </article>
    ))}
  </tbody>
);

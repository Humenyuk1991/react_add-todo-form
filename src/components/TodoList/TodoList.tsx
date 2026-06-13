type TodoListItem = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  user: {
    name: string;
    email: string;
  };
};

type TodoListProps = {
  todos: TodoListItem[];
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
        <a className="UserInfo" href={`mailto:${todo.user.email}`}>
          {todo.user.name}
        </a>
      </article>
    ))}
  </tbody>
);

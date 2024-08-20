import { ITodo } from '../../interfaces/todo.interface';
import TodoItem from '../todoItem/TodoItem';

interface TodoListProps {
  todos: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodo }) => {
  return (
    <div className='bg-white overflow-hidden rounded-t-md mt-8'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodo={setTodo} />
      ))}
    </div>
  );
};

export default TodoList;

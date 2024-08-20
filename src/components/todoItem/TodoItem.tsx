import handleRemoveTodo from '@/functions/handleRemoteTodo';
import updateTodo from '@/functions/handleUpdateTodo';
import { ITodo } from '@/interfaces/todo.interface';
import CheckIcons from '../icons/IconCheck';
import CrossIcons from '../icons/IconCross';

interface TodoItemProps {
  todo: ITodo;
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, setTodo }) => {
  const { completed, id, title } = todo;

  return (
    <article className='flex gap-4 items-center px-5 py-4 border-b border-b-gray-300 dark:bg-gray-800'>
      <button
        className={`flex-none w-5 h-5 rounded-full ${completed ? 'grid place-content-center bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 w-5 h-5' : 'border-2'}`}
        onClick={() => updateTodo({ id, setTodo })}
      >
        {completed && <CheckIcons />}
      </button>
      <p className={`text-gray-600 grow dark:text-gray-400 ${completed && 'line-through'}`}>
        {title}
      </p>
      <button className='flex-none' onClick={() => handleRemoveTodo({ id, setTodo })}>
        <CrossIcons />
      </button>
    </article>
  );
};

export default TodoItem;

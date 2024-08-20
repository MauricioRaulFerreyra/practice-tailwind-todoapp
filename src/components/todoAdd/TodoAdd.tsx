import handleSubmit from '@/functions/handleSubmit';
import { useState } from 'react';

interface ITodoAdd {
  handleAddTodo: (title: string) => void;
}

const TodoAdd: React.FC<ITodoAdd> = ({ handleAddTodo }) => {
  const [title, setTitle] = useState<string>('');

  return (
    <form
      onSubmit={(e) => handleSubmit(e, title, setTitle, handleAddTodo)}
      className=' dark:bg-gray-800 bg-white overflow-hidden rounded-md py-4 flex items-center gap-4'
    >
      <span className='rounded-full w-5 h-5 ml-5 border-2'></span>
      <input
        type='text'
        placeholder='Create a new todo...'
        className='w-full text-gray-400 outline-none dark:bg-gray-800'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoAdd;

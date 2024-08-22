import handleRemoveTodo from '@/functions/handleRemoteTodo';
import updateTodo from '@/functions/handleUpdateTodo';
import { ITodo } from '@/interfaces/todo.interface';
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from '@hello-pangea/dnd';
import React from 'react';
import CheckIcons from '../icons/IconCheck';
import CrossIcons from '../icons/IconCross';

interface TodoItemProps {
  todo: ITodo;
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
}

const TodoItem = React.forwardRef<HTMLDivElement, TodoItemProps>(
  ({ todo, setTodo, draggableProps, dragHandleProps }, ref) => {
    if (!todo) return null;

    const { completed, id, title } = todo;

    return (
      <article
        ref={ref}
        {...draggableProps}
        {...dragHandleProps}
        className='flex gap-4 items-center px-5 py-4 border-b border-b-gray-300 dark:bg-gray-800'
      >
        <button
          className={`flex-none w-5 h-5 rounded-full ${
            completed
              ? 'grid place-content-center bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500'
              : 'border-2'
          }`}
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
  }
);

export default TodoItem;

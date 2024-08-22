import { ITodo } from '@/interfaces/todo.interface';
import { SetStateAction } from 'react';

interface IUpdateTodo {
  id: number;
  setTodo: React.Dispatch<SetStateAction<ITodo[]>>;
}

const updateTodo = ({ id, setTodo }: IUpdateTodo): void => {
  setTodo((prevTodos: ITodo[]) =>
    prevTodos.map((todo: ITodo) =>
      todo?.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

export default updateTodo;

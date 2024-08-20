import { SetStateAction } from 'react';
import { ITodo } from '../interfaces/todo.interface';

interface IHandleAddTodo {
  title: string;
  setTodo: React.Dispatch<SetStateAction<ITodo[]>>;
}

const handleAddTodo = ({ title, setTodo }: IHandleAddTodo): void => {
  const newTodo: ITodo = {
    id: Date.now(),
    title,
    completed: false,
  };

  setTodo((prevTodos) => [...prevTodos, newTodo]);
};

export default handleAddTodo;

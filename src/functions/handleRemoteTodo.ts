import { SetStateAction } from 'react';
import { ITodo } from '../interfaces/todo.interface';

interface IRemoveTodo {
  id: number;
  setTodo: React.Dispatch<SetStateAction<ITodo[]>>;
}

const handleRemoveTodo = ({ id, setTodo }: IRemoveTodo): void => {
  setTodo((prevtodos) => prevtodos.filter((todo) => todo.id !== id));
};

export default handleRemoveTodo;

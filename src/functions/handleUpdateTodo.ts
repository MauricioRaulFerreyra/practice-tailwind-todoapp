import { ITodo } from '@/interfaces/todo.interface';
import { IUpdateTodo } from '@/interfaces/updateTodo.interface';

const updateTodo = ({ id, setTodo }: IUpdateTodo): void => {
  setTodo((prevTodos: ITodo[]) =>
    prevTodos.map((todo: ITodo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

export default updateTodo;

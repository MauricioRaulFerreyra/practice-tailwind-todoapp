import { ITodo } from '@/interfaces/todo.interface';
import { useEffect, useState } from 'react';

// const initialStateTodo: ITodo[] = [{ id: 2024, title: 'Estudiar programación', completed: false }];

let initialStateTodo: ITodo[] = [];

try {
  const storedTodos = localStorage.getItem('todos');
  initialStateTodo = storedTodos ? JSON.parse(storedTodos) : [];
} catch (error) {
  console.error('Error parsing todos from localStorage:', error);
  initialStateTodo = [];
}

const useDB = () => {
  const [todo, setTodo] = useState<ITodo[]>(initialStateTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return { todo, setTodo };
};

export default useDB;

import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TodoAdd from './components/todoAdd/TodoAdd';
import TodoComputer from './components/todoComputer/TodoComputer';
import TodoFilter from './components/todoFilter/TodoFilter';
import TodoList from './components/todoList/TodoList';
import handleAddTodo from './functions/handleAddTodo';
import { ITodo } from './interfaces/todo.interface';

const initialStateTodo: ITodo[] = [{ id: 2024, title: 'Estudiar programación', completed: false }];

function App(): JSX.Element {
  const [todo, setTodo] = useState<ITodo[]>(initialStateTodo);
  const [filter, setFilter] = useState<string>('all');

  const handleComputedItems = () => todo.filter((t) => !t.completed).length;

  const clearCompletedTodos = () => {
    setTodo(todo.filter((t) => !t.completed));
  };

  const filterTodos = (): ITodo[] => {
    switch (filter) {
      case 'all':
        return todo;
      case 'active':
        return todo.filter((t) => !t.completed);
      case 'completed':
        return todo.filter((t) => t.completed);
      default:
        return todo;
    }
  };

  const changeFilter = (filter: string): void => setFilter(filter);

  return (
    <>
      <div className=" bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900">
        <Header />
        <main className=' container mx-auto px-4 mt-3'>
          <TodoAdd handleAddTodo={(title) => handleAddTodo({ title, setTodo })} />
          <TodoList todos={filterTodos()} setTodo={setTodo} />
          <TodoComputer
            computedItems={handleComputedItems()}
            clearCompleted={clearCompletedTodos}
          />
          <TodoFilter changeFilter={changeFilter} filter={filter} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

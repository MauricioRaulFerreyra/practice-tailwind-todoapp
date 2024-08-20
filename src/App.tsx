import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TodoAdd from './components/todoAdd/TodoAdd';
import TodoComputer from './components/todoComputer/TodoComputer';
import TodoFilter from './components/todoFilter/TodoFilter';
import TodoList from './components/todoList/TodoList';
import useDB from './db/useDB';
import handleAddTodo from './functions/handleAddTodo';
import { ITodo } from './interfaces/todo.interface';

function App(): JSX.Element {
  const { todo, setTodo } = useDB();
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
      <div className=' bg-mobile-light bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-mobile-dark md:bg-desktop-light md:dark:bg-desktop-dark'>
        <Header />
        <main className=' container mx-auto px-4 mt-3 md:max-w-xl'>
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

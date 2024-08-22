import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TodoAdd from './components/todoAdd/TodoAdd';
import TodoComputer from './components/todoComputer/TodoComputer';
import TodoFilter from './components/todoFilter/TodoFilter';
import TodoList from './components/todoList/TodoList';
import handleAddTodo from './functions/handleAddTodo';
import { ITodo } from './interfaces/todo.interface';

function App(): JSX.Element {
  const [todo, setTodo] = useState<ITodo[]>(() => {
    try {
      const storedTodos = localStorage.getItem('todos');
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
      console.error('Error parsing todos from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    const cleanItems = todo.filter((item) => item !== null);
    localStorage.setItem('todos', JSON.stringify(cleanItems));
  }, [todo]);

  const [filter, setFilter] = useState<string>('all');

  const handleComputedItems = () => todo.filter((t) => t && !t.completed).length;

  const clearCompletedTodos = () => {
    setTodo(todo.filter((t) => t && !t.completed));
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

  const handleDragEnd = (result: DropResult): void => {
    // console.log('Drag result:', result);
    if (!result?.destination) return;

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const items = [...todo];
    const [reorderedItem] = items.splice(startIndex, 1);

    // console.log('Reordered item:', reorderedItem);

    if (reorderedItem === undefined || reorderedItem === null) return;

    items.splice(endIndex, 0, reorderedItem);

    // console.log('Updated items:', items);

    setTodo(items);
  };

  return (
    <>
      <div className=' bg-mobile-light bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-mobile-dark md:bg-desktop-light md:dark:bg-desktop-dark'>
        <Header />
        <main className=' container mx-auto px-4 mt-3 md:max-w-xl'>
          <TodoAdd handleAddTodo={(title) => handleAddTodo({ title, setTodo })} />
          <DragDropContext onDragEnd={handleDragEnd}>
            <TodoList todos={filterTodos()} setTodo={setTodo} />
          </DragDropContext>
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

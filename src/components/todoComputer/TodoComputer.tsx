interface ITodoComputed {
  computedItems: number;
  clearCompleted: () => void;
}

const TodoComputer: React.FC<ITodoComputed> = ({ computedItems, clearCompleted }) => {
  return (
    <section className='px-5 py-4 bg-white rounded-b-md dark:bg-gray-800'>
      <div className='flex justify-between gap-4'>
        <p className='text-gray-400'>{computedItems} items left</p>
        <button className='text-gray-400' onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
    </section>
  );
};

export default TodoComputer;

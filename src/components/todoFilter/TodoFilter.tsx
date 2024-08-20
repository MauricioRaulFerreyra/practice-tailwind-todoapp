interface ITodoFilter {
  changeFilter: (filter: string) => void;
  filter: string;
}

const TodoFilter: React.FC<ITodoFilter> = ({ changeFilter, filter }) => {
  return (
    <section className='container mx-auto mt-4'>
      <div className='bg-white p-4 flex justify-center gap-6 rounded-md dark:bg-gray-800'>
        <button
          className={`${filter === 'all' ? 'text-indigo-700 font-semibold' : 'text-gray-400 hover:text-blue-500 font-semibold'}`}
          onClick={() => changeFilter('all')}
        >
          ALL
        </button>
        <button
          className={`${filter === 'active' ? 'text-indigo-700 font-semibold' : 'text-gray-400 hover:text-blue-500 font-semibold'}`}
          onClick={() => changeFilter('active')}
        >
          Active
        </button>
        <button
          className={`${filter === 'completed' ? 'text-indigo-700 font-semibold' : 'text-gray-400 hover:text-blue-500 font-semibold'}`}
          onClick={() => changeFilter('completed')}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;

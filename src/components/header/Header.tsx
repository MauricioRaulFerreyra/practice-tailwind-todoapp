import MoonIcons from '../icons/IconMoon';

const Header = () => {
  return (
    <header className=' container mx-auto px-4 py-2'>
      <div className='flex justify-between py-9 my-1'>
        <h1 className='uppercase text-white text-3xl font-semibold'>t o d o</h1>
        <button>
          <MoonIcons />
        </button>
      </div>
    </header>
  );
};

export default Header;

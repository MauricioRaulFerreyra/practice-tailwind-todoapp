import useToggleTheme from '@/hooks/useToggleTheme';
import MoonIcons from '../icons/IconMoon';
import IconSun from '../icons/IconSun';

const Header = () => {
  const [theme, toggleTheme] = useToggleTheme();

  return (
    <header className=' container mx-auto px-4 py-2 md:max-w-xl'>
      <div className='flex justify-between py-9 my-1'>
        <h1 className='uppercase text-white text-3xl font-semibold'>t o d o</h1>
        <button onClick={toggleTheme}>{theme === 'light' ? <MoonIcons /> : <IconSun />}</button>
      </div>
    </header>
  );
};

export default Header;

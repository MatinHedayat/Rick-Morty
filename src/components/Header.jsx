import Logo from './Logo';
import { useThemeMode } from '../contexts/ThemeModeProvider';

import { MdFavorite } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  const { theme, setTheme } = useThemeMode();

  const handleChangeTheme = () =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  const buttonSX = {
    fontWeight: 700,
    px: { xs: 1, sm: 1.5 },
    py: 1,
    background: 'linear-gradient(to top left, #60a5fa, #2563eb)',
    borderRadius: 2.5,
    boxShadow: '0 0.3rem 0.5rem rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: 'linear-gradient(to top left, #60a5fa, #2563eb)',
      boxShadow: '0 0.3rem 0.5rem rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div className='gr-1 flex items-center justify-between px-4 py-3 rounded-2xl shadow-xl sm:px-6'>
      <Link to='/'>
        <button className='flex-center'>
          <Logo
            width={40}
            height={40}
            fill={`${theme === 'light' ? '#e2e8f0' : '#1e293b'}`}
          />
          <span
            className={`text-lg font-bold ml-2 hidden sm:block ${
              theme === 'light' ? 'text-slate-200' : 'text-slate-800'
            }`}
          >
            Rick & Morty
          </span>
        </button>
      </Link>

      <div className='flex items-center gap-x-2 md:gap-x-3'>
        <Link to='/favorites'>
          <Button variant='contained' sx={buttonSX}>
            <MdFavorite className='text-xl text-red-400' />
            <span className='text-slate-800 ml-2 hidden sm:block'>
              Favorites
            </span>
          </Button>
        </Link>

        <Button variant='contained' sx={buttonSX} onClick={handleChangeTheme}>
          {theme === 'light' ? (
            <>
              <MdDarkMode className='text-xl text-slate-800' />
              <span className='text-slate-800 ml-2 hidden sm:block'>Dark</span>
            </>
          ) : (
            <>
              <MdLightMode className='text-xl text-slate-200' />
              <span
                className={`ml-2 hidden sm:block ${
                  theme === 'light' ? 'text-slate-800' : 'text-slate-200'
                }`}
              >
                Light
              </span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

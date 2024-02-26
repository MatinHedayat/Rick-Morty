import Characters from './pages/Characters';
import Character from './pages/Character';
import Favorites from './pages/Favorites';

import theme from './MUI-Theme';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import ThemeModeProvider from './contexts/ThemeModeProvider';

export default function App() {
  return (
    <>
      <main className='bg-slate-200/80 dark:bg-slate-800 w-full h-screen overflow-auto transition-color duration-300'>
        <ThemeModeProvider>
          <ThemeProvider theme={theme}>
              <Routes>
                <Route path='/' element={<Characters />} />
                <Route path='/character' element={<Character />} />
                <Route path='/favorites' element={<Favorites />} />
              </Routes>
          </ThemeProvider>
        </ThemeModeProvider>
      </main>
    </>
  );
}

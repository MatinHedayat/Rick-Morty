import { Route, Routes } from 'react-router-dom';

import Characters from './pages/Characters';
import Character from './pages/Character';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <>
      <main className='bg-slate-200 w-full min-h-screen'>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/character' element={<Character />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

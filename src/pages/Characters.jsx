import CharacterCard from '../components/CharacterCard';
import Filter from '../components/Filter';
import Layout from '../components/Layout';
import useFetchData from '../hooks/useFetchData';
import useWindowInnerWidth from '../hooks/useWindowInnerWidth';
import CharacterDetail from '../components/CharacterDetail';
import { Loading, Error } from '../components/SideData';

import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';

import { HiStatusOnline } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useThemeMode } from '../contexts/ThemeModeProvider';

export default function Characters() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => setPage(value);

  const { fetchData, data, isLoading, isError } = useFetchData(
    'character',
    `page=${page}&${query}`
  );

  useEffect(() => {
    fetchData();
  }, [query, page]);

  const [character, setCharacter] = useState(null);
  const handleSetCharacter = (character) => setCharacter(character);

  const windowWidth = useWindowInnerWidth(1024);
  const { theme } = useThemeMode();

  return (
    <Layout>
      <Filter setPage={setPage} setQuery={setQuery} />

      <div className='text-slate-600 flex flex-col gap-1 my-6 dark:text-slate-400'>
        <div className='flex-between'>
          <p className='text-slate-700 text-2xl font-bold dark:text-slate-300'>
            Characters
          </p>

          <p className='bg-slate-300 text-[0.75rem] font-semibold px-2 py-1 flex-center-2 rounded-lg dark:bg-slate-600 dark:text-slate-300'>
            <HiStatusOnline className='text-base' />
            Request Status
          </p>
        </div>

        <div className='font-semibold flex-between'>
          <p className='text-[0.8rem] flex-center-2 dark:text-slate-300'>
            <span className='bg-slate-300 px-2 rounded-lg dark:bg-slate-600'>
              {isError ? 0 : isLoading ? '...' : data.info.count}
            </span>
            Results found
          </p>

          <div className='text-[0.75rem]'>
            {isLoading ? (
              'Calculating ...'
            ) : data ? (
              <p className='flex-center-1'>
                <FaCheck className='bg-slate-300 text-lg p-1 rounded-md dark:text-slate-300 dark:bg-slate-500' />
                <span>Successful</span>
              </p>
            ) : (
              <p className='flex-center-1'>
                <IoClose className='bg-slate-300 text-xl p-1 rounded-md dark:text-slate-300 dark:bg-slate-500' />
                Unsuccessful
              </p>
            )}
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <div className='flex gap-4 lg:h-[70dvh]'>
            <div className='relative w-full grid content-start gap-4 pr-2 overflow-auto animate-show sm:grid-cols-2 lg:grid-cols-1 lg:w-2/6'>
              {data.results.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  setCharacter={handleSetCharacter}
                  showFavIcon={true}
                  selectionIsAllowed={false}
                  parentComponent={'/'}
                />
              ))}
            </div>

            {windowWidth && <CharacterDetail character={character} />}
          </div>

          <Pagination
            className='flex-center'
            sx={{
              mt: 6,
              color: 'red',
              button: { color: theme === 'light' ? '#1e293b' : '#cbd5e1' },
            }}
            page={page}
            onChange={handleChange}
            count={data.info.pages}
            shape='rounded'
            color={`${theme === 'light' ? 'common' : 'primary'}`}
          />
        </>
      )}
    </Layout>
  );
}

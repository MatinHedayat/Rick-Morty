import CharacterItem from '../components/CharacterItem';
import Filter from '../components/Filter';
import Layout from '../components/Layout';
import useFetchData from '../hooks/useFetchData';

import { useEffect } from 'react';

export default function Characters() {
  const { fetchData, data, isLoading, isError } = useFetchData('character');

  const loading = 'loading'
  const error = 'error'

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Filter />

      <div>result</div>

      {isLoading ? (
        loading
      ) : isError ? (
        error
      ) : (
        <div className='bg-red-400 h-80 flex flex-col gap-y-2'>
          {data.results.map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      )}
    </Layout>
  );
}

import Layout from '../components/Layout';
import CharacterCard from '../components/CharacterCard';
import useWindowInnerWidth from '../hooks/useWindowInnerWidth';
import CharacterDetail from '../components/CharacterDetail';
import { useFavorites } from '../contexts/FavoritesProvider';
import useScrollPosition from '../hooks/useScrollPosition';
import Modal from '../components/Modal';

import { useState } from 'react';
import { Button } from '@mui/material';

export default function Favorites() {
  const { favorites, setFavorites } = useFavorites();
  const windowWidth = useWindowInnerWidth(1024);

  const [character, setCharacter] = useState(null);
  const [selectedChars, setSelectedChars] = useState([]);
  const handleSetCharacter = (character) => setCharacter(character);

  const handleSetSelectedCharacters = (char) => {
    if (selectedChars.some((character) => character.id === char.id)) {
      setSelectedChars(
        selectedChars.filter((character) => character.id !== char.id)
      );
    } else {
      setSelectedChars([...selectedChars, char]);
    }
  };

  const [modalIsOpen, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  function handleDeleteSelectedChars() {
    setFavorites(
      favorites.filter(
        (fav) => !selectedChars.some((char) => char.id === fav.id)
      )
    );
    setSelectedChars([]);
  }

  const { handleScrollPosition, favoritesRef } = useScrollPosition();

  return (
    <Layout>
      <div className='text-slate-700 font-medium my-6 dark:text-slate-400'>
        <div className='flex-between'>
          <h2 className='text-2xl font-bold dark:text-slate-300'>Favorites</h2>
          <p className='flex-center-2'>
            Total :
            <span className='bg-slate-300 px-3 rounded-lg dark:text-slate-600'>
              {favorites.length}
            </span>
          </p>
        </div>

        <p className='hidden sm:block'>
          You can select characters by tapping on them
        </p>
      </div>

      <div className='flex-between mb-4'>
        <Button
          variant='contained'
          onClick={() => {
            if (!selectedChars.length && favorites.length) {
              setModalType('deleteAll');
              handleOpenModal();
            } else setSelectedChars([]);
          }}
        >
          {selectedChars.length ? 'Clear Selection' : 'Delete All'}
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            if (selectedChars.length) {
              setModalType('delete');
              handleOpenModal();
            }
          }}
        >
          Delete ({selectedChars.length})
        </Button>
      </div>

      <div className='flex gap-x-2'>
        <div
          className={`w-full h-[60vh] grid content-start gap-4 pr-4 overflow-auto sm:pr-2 sm:${
            favorites.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
          } lg:grid-cols-1 lg:w-2/6`}
          ref={favoritesRef}
          onScroll={handleScrollPosition}
        >
          {favorites.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              setCharacter={handleSetCharacter}
              showFavIcon={false}
              selectionIsAllowed={true}
              selectedChars={selectedChars}
              setSelectedChars={handleSetSelectedCharacters}
              parentComponent={'/favorites'}
            />
          ))}
        </div>

        {windowWidth && <CharacterDetail character={character} />}
      </div>

      <Modal
        modalType={modalType}
        selectedCount={selectedChars.length}
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
        setSelectedChars={handleDeleteSelectedChars}
      />
    </Layout>
  );
}

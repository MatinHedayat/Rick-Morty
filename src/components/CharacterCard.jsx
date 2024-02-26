import useWindowInnerWidth from '../hooks/useWindowInnerWidth';
import { useFavorites } from '../contexts/FavoritesProvider';
import Icon from './Icon';

import { useNavigate } from 'react-router-dom';

import { BsChevronRight } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';

export default function CharacterCard({
  character,
  setCharacter,
  showFavIcon,
  selectionIsAllowed,
  selectedChars,
  setSelectedChars,
  parentComponent,
}) {
  const { name, gender, species, image, status } = character;

  const { favorites } = useFavorites();
  const charIsFav = favorites.some((fav) => fav.id === character.id);

  const navigate = useNavigate();
  const windowWidth = useWindowInnerWidth(1024);

  const handleSetCharacter = () => {
    !windowWidth &&
      navigate('/character', { state: { character, parentComponent } });
    setCharacter(character);
  };

  const isSelected =
    selectionIsAllowed &&
    selectedChars.some((char) => char.id === character.id);

  return (
    <div
      className={`w-full h-24 relative flex overflow-hidden border border-slate-400 bg-gradient-to-l from-blue-200/80 to-transparent rounded-xl transition-transform duration-300 dark:bg-none dark:bg-slate-700 ${
        isSelected ? 'translate-x-2 sm:translate-x-0' : ''
      }`}
    >
      <div
        className={`absolute z-10 inset-y-0 left-0 ${
          isSelected ? 'right-0' : 'right-10'
        }`}
        onClick={() => selectionIsAllowed && setSelectedChars(character)}
      >
        <div
          className={`absolute z-20 inset-y-0 transition-color duration-300 ${
            isSelected ? 'bg-blue-300/60 left-0 right-0' : 'left-1/3 right-1/3'
          }
    `}
        ></div>
      </div>

      {showFavIcon && (
        <div
          className={`bg-blue-200 absolute bottom-1 left-1 p-1 border border-slate-400 rounded-lg shadow-xl transition-all duration-300 ${
            charIsFav
              ? 'opacity-100 scale-90 translate-x-0'
              : 'opacity-0 scale-50 -translate-x-8'
          }`}
        >
          <MdFavorite className='text-red-500 text-xl' />
        </div>
      )}

      <div className='w-2/6'>
        <img className='w-full h-full object-cover' src={image} alt='avatar' />
      </div>

      <div className='w-4/6 h-full relative text-slate-700 capitalize px-3 py-2 border-l border-slate-400 dark:text-slate-300/80'>
        <div className='pr-6'>
          <h3 className='text-slate-800 font-bold truncate dark:text-slate-300'>
            {name}
          </h3>

          <p className='text-[0.85rem] font-semibold flex-center-1 mt-1'>
            <Icon dataType='status' value={status} />
            <span className=''>{status}</span> -
            <span className={`${gender === 'unknown' ? 'text-[0.7rem]' : ''}`}>
              {gender}
            </span>
          </p>

          <p className='font-semibold flex-center-1'>
            <Icon dataType='species' value={species} />

            <span
              className={`capitalize ${
                species === 'Mythological Creature'
                  ? 'text-[0.7rem]'
                  : 'text-[0.85rem]'
              }`}
            >
              {species}
            </span>
          </p>
        </div>

        <button
          className='w-10 h-full absolute inset-y-1/2 right-0 -translate-y-1/2 flex-center'
          onClick={handleSetCharacter}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}

import { useFavorites } from '../contexts/FavoritesProvider';
import useOutsideFocus from '../hooks/useOutsideFocus';

import { TbInfoSquareRoundedFilled } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import { Button } from '@mui/material';
import { useRef } from 'react';
import { useThemeMode } from '../contexts/ThemeModeProvider';

export default function Modal({
  modalType,
  selectedCount,
  modalIsOpen,
  handleCloseModal,
  setSelectedChars,
}) {
  const { setFavorites } = useFavorites();
  const { theme } = useThemeMode();

  const modalRef = useRef(null);
  useOutsideFocus(modalRef, handleCloseModal);

  const deleteAllTitle =
    'Are you sure you want to delete all favorite characters ?';
  const deleteTitle =
    selectedCount > 1
      ? 'Are you sure you want to delete these characters ?'
      : 'Are you sure you want to delete this character ?';

  function handleOkBtn() {
    if (modalType === 'deleteAll') setFavorites([]);
    else setSelectedChars();
    handleCloseModal();
  }

  const buttonStyle = {
    color: `${theme === 'light' ? '#475569' : '#cbd5e1'}`,
    px: 4,
    fontWeight: 'bold',
    border: `1px solid ${theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : '#64748b'}`,
    background: `${theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : '#475569'}`,
    '&:hover': { background: 'rgba(0, 0, 0, 0.1)' },
  };

  return (
    <>
      <div
        className={`bg-slate-800/60 backdrop-blur-sm fixed z-40 inset-0 transition-color duration-300 ${
          modalIsOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-300'
        }`}
      ></div>

      <div
        className={`bg-white text-slate-600 font-medium w-5/6 max-w-lg fixed z-50 top-1/2 left-1/2 -translate-x-1/2 p-6 rounded-lg shadow-2xl transition-all duration-500 dark:bg-slate-700 dark:text-slate-300 ${
          modalIsOpen
            ? 'opacity-100 visible -translate-y-1/2 delay-200'
            : 'opacity-0 invisible'
        }`}
        ref={modalRef}
      >
        <div className='flex-between'>
          <p className='flex-center-1 sm:flex-center-2'>
            <TbInfoSquareRoundedFilled className='text-2xl' />
            <span className='text-sm font-bold'>Notice</span>
          </p>

          <button
            className='bg-slate-300/30 p-2 rounded-full transition-color duration-300 hover:bg-slate-300/80'
            onClick={handleCloseModal}
          >
            <IoClose className='text-xl' />
          </button>
        </div>

        <h3 className='text-lg font-semibold mt-5 mb-4'>
          {modalType === 'deleteAll' ? deleteAllTitle : deleteTitle}
        </h3>

        <div className='space-x-2 mt-4 mb-2'>
          <Button sx={buttonStyle} onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button sx={buttonStyle} onClick={handleOkBtn}>
            Ok
          </Button>
        </div>

        <input className='mt-4' type='checkbox' id='modal-check' />
        <label className='text-sm ml-1.5' htmlFor='modal-check'>
          Don't ask me again
        </label>
      </div>
    </>
  );
}

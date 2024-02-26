import AccordionItem from './AccordionItem';
import { useThemeMode } from '../contexts/ThemeModeProvider';
import { statusTypes, genderTypes, speciesTypes } from '../data/filterItems';

import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';

export default function Filter({ setPage, setQuery }) {
  const [characterName, setCharacterName] = useState('');
  const [statusType, setStatusType] = useState('');
  const [genderType, setGenderType] = useState('');
  const [speciesType, setSpeciesType] = useState('');

  const { theme } = useThemeMode();

  const query = `name=${characterName}&status=${statusType}&gender=${genderType}&species=${speciesType}`;
  const handleSubmitAction = (e) => {
    e.preventDefault();
    setQuery(query);
    setPage(1);
  };

  const handleDeleteFilter = (id) => {
    id === 1
      ? setStatusType('')
      : id === 2
      ? setGenderType('')
      : setSpeciesType('');
  };

  const buttonSX = {
    width: { xs: '4rem', sm: '8rem' },
    height: { xs: '2.5rem', sm: '3rem' },
    borderRadius: 3,
    boxShadow: '0 0.3rem 0.5rem rgba(0, 0, 0, 0.2)',
    '&:hover': { boxShadow: '0 0.3rem 0.5rem rgba(0, 0, 0, 0.2)' },
  };

  const accordionSummary = {
    width: 'max-content',
    height: 0,
    minHeight: 0,
    fontSize: '0.8rem',
    fontWeight: 600,
    px: 1,
    py: 2,
    borderRadius: 2.5,
    color: '#666',
    background: '#cbd5e1',
  };

  const accordionButtonSX = {
    fontSize: '0.7rem',
    textTransform: 'capitalize',
    px: 2,
    py: 0.5,
    borderRadius: '0.5rem',
  };

  return (
    <div className='mt-4'>
      <form
        className='flex justify-between gap-2 mb-3'
        onSubmit={handleSubmitAction}
      >
        <input
          className='w-full bg-white/80 text-slate-500 text-[0.85rem] font-semibold px-4 py-2 outline-none rounded-xl transition-all shadow-lg focus:shadow-xl dark:bg-slate-600 dark:text-slate-300 dark:placeholder-slate-300 sm:text-base sm:px-6'
          type='text'
          value={characterName}
          placeholder='Character name ...'
          onChange={(e) => setCharacterName(e.target.value)}
        />

        <Button type='submit' variant='contained' sx={buttonSX}>
          <LuSearch className='text-2xl' />
        </Button>
      </form>

      <div className='relative'>
        <div className='absolute z-20 top-0 right-0 items-center justify-center gap-1 hidden sm:flex'>
          {[
            { id: 1, value: statusType },
            { id: 2, value: genderType },
            { id: 3, value: speciesType },
          ].map((item) =>
            item.value ? (
              <Button
                sx={accordionButtonSX}
                variant='contained'
                key={item.id}
                onClick={() => handleDeleteFilter(item.id)}
              >
                <span>{item.value}</span>
              </Button>
            ) : null
          )}
        </div>

        <Accordion sx={{ background: 'transparent' }}>
          <AccordionSummary
            sx={accordionSummary}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  fontSize: 20,
                  color: '#666',
                }}
              />
            }
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <TuneIcon sx={{ fontSize: 20, mr: 0.5 }} />
            <span className='mr-2'>Filters</span>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              px: 0,
              py: 1,
              mt: 1,
              background: `${theme === 'light' ? '#d9e0e8' : '#334155'}`,
              borderRadius: 3.5,
            }}
          >
            <AccordionItem
              title='Status'
              filterList={statusTypes}
              filterType={statusType}
              setFilterType={setStatusType}
            />

            <AccordionItem
              title='Gender'
              filterList={genderTypes}
              filterType={genderType}
              setFilterType={setGenderType}
            />
            <AccordionItem
              title='Species'
              filterList={speciesTypes}
              filterType={speciesType}
              setFilterType={setSpeciesType}
            />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

import { useThemeMode } from '../contexts/ThemeModeProvider';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

export default function AccordionItem(props) {
  const { title, filterList, filterType, setFilterType } = props;
  const { theme } = useThemeMode();

  const buttonStyle = {
    fontSize: '0.8rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    px: 2,
    py: 0.5,
    border: '2px solid #5590f0',
    borderRadius: 3,
    '&:hover': { background: '#5590f0', color: '#fff' },
  };

  return (
    <Accordion sx={{ background: 'transparent' }}>
      <AccordionSummary
        sx={{
          height: 36,
          minHeight: 36,
          fontSize: '0.85rem',
          fontWeight: 600,
          color: theme === 'light' ? '#666' : '#94a3b8',
        }}
        expandIcon={
          <ExpandMoreIcon
            sx={{ fontSize: 20, color: theme === 'light' ? '#666' : '#94a3b8' }}
          />
        }
        aria-controls='panel1-content'
        id='panel1-header'
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          py: 0,
          pb: 1,
          mt: -1.5,
        }}
      >
        <div className='flex flex-wrap gap-2 mt-4'>
          {filterList.map((type) => (
            <Button
              sx={{
                ...buttonStyle,
                color: filterType === type ? '#fff' : '#5590f0',
                background:
                  filterType === type ? '#5590f0' : 'rgba(85, 144, 240, 0.1)',
              }}
              key={type}
              onClick={() => setFilterType(filterType === type ? '' : type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

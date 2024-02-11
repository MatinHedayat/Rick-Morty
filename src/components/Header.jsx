import { Button } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Logo from './Logo';

export default function Header() {
  const buttonSX = {
    minWidth: 0,
    p: 1,
    borderRadius: 2,
    background: '#222',
    '&:hover': { background: '#333' },
  };

  return (
    <div className='gr-1 flex items-center justify-between p-4 rounded-2xl shadow-xl'>
      <button>
        <Logo width={45} height={45} fill={'#fff'} />
      </button>

      <div className='flex items-center gap-x-2'>
        <Button variant='contained' sx={buttonSX}>
          <StarOutlineIcon />
        </Button>

        <Button variant='contained' sx={buttonSX}>
          <DarkModeOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

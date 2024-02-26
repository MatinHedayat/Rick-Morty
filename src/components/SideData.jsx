import { ThreeCircles } from 'react-loader-spinner';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { useThemeMode } from '../contexts/ThemeModeProvider';

export function Loading() {
  const { theme } = useThemeMode();

  return (
    <ThreeCircles
      height='200'
      width='200'
      color={`${theme === 'light' ? '#5590f0' : '#94a3b8'}`}
      ariaLabel='grid-loading'
      radius='12.5'
      wrapperClass='flex-center mt-28 mx-auto'
    />
  );
}

export function Error() {
  return (
    <div className='w-full text-slate-700 py-20 flex flex-col items-center justify-center gap-4 dark:text-slate-300'>
      <p className='text-3xl font-black capitalize flex-center-1'>
        <ReportGmailerrorredIcon sx={{ fontSize: 80 }} />
        An error <br /> occurred
      </p>

      <p className='bg-slate-300/80 text-slate-600 text-sm font-semibold flex-center-2 px-4 py-2 rounded-lg dark:text-slate-400 dark:bg-slate-700'>
        <ContactSupportIcon />
        Nothing found ... !
      </p>
    </div>
  );
}

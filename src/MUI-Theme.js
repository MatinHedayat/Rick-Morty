import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: '0',
          textTransform: 'none',
          background: '#5590f0',
          boxShadow: 'none',
          '&:hover': { background: '#3b82f6' },
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        square: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: 'none',
          '&.MuiAccordion-root:before': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

export default theme;

import { createTheme } from '@mui/material/styles';

// Vars CSS
const cssVariables = {
  colors: {
    primary: '#1976d2',
    secondary: '#dc004e',
    background: '#f5f5f5',
  },
  spacing: (factor: number) => `${8 * factor}px`,
};

// Extendemos el tema de MUI con nuestras vars
const theme = createTheme({
  palette: {
    primary: {
      main: cssVariables.colors.primary,
    },
    secondary: {
      main: cssVariables.colors.secondary,
    },
    background: {
      default: cssVariables.colors.background,
    },
  },
  spacing: 8, // Base spacing (8px por defecto)
});

export default theme;
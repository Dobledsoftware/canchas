import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { CanchasList } from './components/Canchas/CanchasList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza estilos y aplica el fondo del tema */}
      <CanchasList />
    </ThemeProvider>
  );
}

export default App;
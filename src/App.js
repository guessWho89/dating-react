import Home from './pages/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#e53935',
        main: '#d32f2f',
        dark: '#c62828',
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}


import { CssBaseline, ThemeProvider, type PaletteMode } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { buildTheme } from './theme/theme';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';

const STORAGE_KEY = 'portfolio-theme';

function getInitialMode(): PaletteMode {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'light';
}

export default function App() {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const theme = useMemo(() => buildTheme(mode), [mode]);
  const toggleTheme = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar mode={mode} onToggleTheme={toggleTheme} />
      <Home />
    </ThemeProvider>
  );
}

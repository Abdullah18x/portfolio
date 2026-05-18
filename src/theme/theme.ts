import { createTheme, type ThemeOptions, type PaletteMode } from '@mui/material';

const sharedTypography: ThemeOptions['typography'] = {
  fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
  h1: { fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 },
  h2: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 },
  h3: { fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2 },
  h4: { fontWeight: 600, letterSpacing: '-0.01em' },
  h5: { fontWeight: 600 },
  h6: { fontWeight: 600, fontSize: '1rem' },
  body1: { fontSize: '1rem', lineHeight: 1.65 },
  body2: { fontSize: '0.92rem', lineHeight: 1.6 },
  button: { textTransform: 'none', fontWeight: 500 },
  overline: {
    fontFamily: '"JetBrains Mono", monospace',
    letterSpacing: '0.18em',
    fontWeight: 500,
    fontSize: '0.72rem',
  },
};

const light = {
  bg: '#F7F9FC',
  surface: '#FFFFFF',
  surfaceAlt: '#EDF2F9',
  border: '#DCE3ED',
  text: '#1A1F2B',
  textMuted: '#5A6478',
  accent: '#4A7BD8',
  accentRgb: '74,123,216',
};

const dark = {
  bg: '#0E0E14',
  surface: '#16161E',
  surfaceAlt: '#1C1C26',
  border: '#26262F',
  text: '#ECECF1',
  textMuted: '#8E8E9C',
  accent: '#8B6FD6',
  accentRgb: '139,111,214',
};

export const buildTheme = (mode: PaletteMode) => {
  const p = mode === 'light' ? light : dark;

  return createTheme({
    palette: {
      mode,
      primary: { main: p.accent, contrastText: mode === 'light' ? '#FFFFFF' : '#0E0E10' },
      background: { default: p.bg, paper: p.surface },
      text: { primary: p.text, secondary: p.textMuted },
      divider: p.border,
    },
    shape: { borderRadius: 14 },
    typography: sharedTypography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--bg': p.bg,
            '--surface': p.surface,
            '--surface-alt': p.surfaceAlt,
            '--border': p.border,
            '--text': p.text,
            '--text-muted': p.textMuted,
            '--accent': p.accent,
          },
          html: { scrollBehavior: 'smooth' },
          body: {
            backgroundColor: p.bg,
            color: p.text,
            backgroundImage:
              mode === 'light'
                ? `radial-gradient(1200px 600px at 80% -10%, rgba(${p.accentRgb},0.07), transparent 60%)`
                : `radial-gradient(1200px 600px at 80% -10%, rgba(${p.accentRgb},0.06), transparent 60%)`,
            backgroundAttachment: 'fixed',
          },
          '::selection': { backgroundColor: p.accent, color: mode === 'light' ? '#fff' : '#000' },
          '*::-webkit-scrollbar': { width: 10, height: 10 },
          '*::-webkit-scrollbar-thumb': { background: p.border, borderRadius: 8 },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none', border: `1px solid ${p.border}` },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 18, paddingBlock: 9 },
          containedPrimary: {
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none', filter: 'brightness(1.05)' },
          },
          outlined: { borderColor: p.border, color: p.text, '&:hover': { borderColor: p.accent, backgroundColor: 'transparent' } },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            backgroundColor: p.surfaceAlt,
            border: `1px solid ${p.border}`,
            color: p.text,
            fontWeight: 500,
            fontSize: '0.78rem',
            height: 28,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: p.surface,
            border: `1px solid ${p.border}`,
            transition: 'border-color .25s ease, transform .25s ease',
            '&:hover': { borderColor: p.accent },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: { backgroundColor: p.text, color: p.bg, fontSize: '0.75rem' },
          arrow: { color: p.text },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: { color: p.text, '&:hover': { backgroundColor: p.surfaceAlt } },
        },
      },
    },
  });
};

import { IconButton, Tooltip } from '@mui/material';
import { Moon, Sun } from 'lucide-react';
import type { PaletteMode } from '@mui/material';
import './ThemeToggle.css';

interface Props {
  mode: PaletteMode;
  onToggle: () => void;
}

export default function ThemeToggle({ mode, onToggle }: Props) {
  const isDark = mode === 'dark';
  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'} arrow>
      <IconButton
        onClick={onToggle}
        aria-label="Toggle theme"
        className="theme-toggle"
        size="small"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </IconButton>
    </Tooltip>
  );
}

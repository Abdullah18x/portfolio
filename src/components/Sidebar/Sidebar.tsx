import { Box, Drawer, IconButton, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
  Home as HomeIcon,
  User,
  Sparkles,
  Briefcase,
  FolderGit2,
  Github,
  Code2,
  GraduationCap,
  Award,
  Languages as LanguagesIcon,
  Mail,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { PaletteMode } from '@mui/material';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { navSections } from '../../data/contactData';
import { resumeData } from '../../data/resumeData';
import './Sidebar.css';

interface Props {
  mode: PaletteMode;
  onToggleTheme: () => void;
}

const COLLAPSE_KEY = 'portfolio-sidebar-collapsed';

const navIcons: Record<string, LucideIcon> = {
  home: HomeIcon,
  about: User,
  strengths: Sparkles,
  experience: Briefcase,
  projects: FolderGit2,
  'open-source': Github,
  skills: Code2,
  education: GraduationCap,
  certifications: Award,
  languages: LanguagesIcon,
  contact: Mail,
};

export default function Sidebar({ mode, onToggleTheme }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(COLLAPSE_KEY) === '1';
  });

  useEffect(() => {
    const ids = navSections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.localStorage.setItem(COLLAPSE_KEY, collapsed ? '1' : '0');
    document.documentElement.style.setProperty(
      '--sidebar-width',
      collapsed ? '76px' : '260px'
    );
  }, [collapsed]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderNavLink = (s: typeof navSections[number], i: number) => {
    const Icon = navIcons[s.id] ?? HomeIcon;
    const inner = (
      <a
        href={`#${s.id}`}
        className={`nav-link ${active === s.id ? 'is-active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(s.id);
        }}
        aria-label={s.label}
      >
        <span className="nav-icon"><Icon size={16} /></span>
        <span className="nav-index">{String(i).padStart(2, '0')}</span>
        <span className="nav-label">{s.label}</span>
      </a>
    );

    if (collapsed && isDesktop) {
      return (
        <Tooltip key={s.id} title={s.label} placement="right" arrow>
          <li>{inner}</li>
        </Tooltip>
      );
    }
    return <li key={s.id}>{inner}</li>;
  };

  const NavList = (
    <nav aria-label="Section navigation" className="nav-list">
      <Box className="brand">
        <img className="brand-mark" src={resumeData.avatar} alt={`${resumeData.name} avatar`} loading="lazy" />
        <Box className="brand-text">
          <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.2 }}>{resumeData.name}</Typography>
          <Typography variant="caption" color="text.secondary">{resumeData.title}</Typography>
        </Box>
      </Box>

      <ul className="nav-items">
        {navSections.map((s, i) => renderNavLink(s, i))}
      </ul>

      <Box className="sidebar-footer">
        <ThemeToggle mode={mode} onToggle={onToggleTheme} />
        <Typography variant="caption" color="text.secondary" className="sidebar-footer-text">
          {mode === 'dark' ? 'Dark' : 'Light'} mode
        </Typography>
      </Box>
    </nav>
  );

  if (isDesktop) {
    return (
      <aside className={`sidebar-desktop ${collapsed ? 'is-collapsed' : ''}`}>
        <Tooltip title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} placement="right" arrow>
          <IconButton
            className="sidebar-collapse-btn"
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            size="small"
          >
            {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          </IconButton>
        </Tooltip>
        {NavList}
      </aside>
    );
  }

  return (
    <>
      <header className="topbar">
        <Box className="brand">
          <img className="brand-mark" src={resumeData.avatar} alt={`${resumeData.name} avatar`} loading="lazy" />
          <Box className="brand-text">
            <Typography component="div" className="brand-name">{resumeData.name}</Typography>
            <Typography component="div" className="brand-subtitle">{resumeData.title}</Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={1}>
          <ThemeToggle mode={mode} onToggle={onToggleTheme} />
          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="topbar-menu-btn"
            size="small"
          >
            <Menu size={18} />
          </IconButton>
        </Stack>
      </header>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 280, p: 0, backgroundColor: 'background.default' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu" size="small">
            <X size={18} />
          </IconButton>
        </Box>
        {NavList}
      </Drawer>
    </>
  );
}

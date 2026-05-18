import { Box, Stack, Typography } from '@mui/material';
import { Github } from 'lucide-react';
import { useState } from 'react';
import { resumeData } from '../../data/resumeData';
import './GitHubActivity.css';

const username = 'Abdullah18x';
const accentLight = '4A7BD8';
const accentDark = '8B6FD6';
const textLight = '2B2F3A';
const textDark = 'D9DAE0';

const heatmapSrc = `https://ghchart.rshah.org/${accentLight}/${username}`;

const statsBase = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=00000000`;
const statsLight = `${statsBase}&title_color=${accentLight}&icon_color=${accentLight}&text_color=${textLight}`;
const statsDark = `${statsBase}&title_color=${accentDark}&icon_color=${accentDark}&text_color=${textDark}`;

const topLangsBase = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&hide_border=true&layout=compact&langs_count=8&bg_color=00000000`;
const topLangsLight = `${topLangsBase}&title_color=${accentLight}&text_color=${textLight}`;
const topLangsDark = `${topLangsBase}&title_color=${accentDark}&text_color=${textDark}`;

interface StatCardProps {
  light: string;
  dark: string;
  alt: string;
}

function StatCard({ light, dark, alt }: StatCardProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <Box className="gh-stat-card gh-stat-card--fallback">
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', px: 2 }}>
          GitHub stats are temporarily unavailable. View the live profile for the latest data.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="gh-stat-card">
      <img
        className="gh-img gh-img--light"
        src={light}
        alt={alt}
        loading="lazy"
        onError={() => setErrored(true)}
      />
      <img
        className="gh-img gh-img--dark"
        src={dark}
        alt={alt}
        loading="lazy"
        onError={() => setErrored(true)}
      />
    </Box>
  );
}

export default function GitHubActivity() {
  return (
    <Box className="gh-activity">
      <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
        <Box className="gh-icon"><Github size={18} /></Box>
        <Box>
          <Typography variant="overline" color="text.secondary">GitHub Activity</Typography>
          <Typography variant="h6" component="h3" sx={{ fontSize: '1rem', lineHeight: 1.3 }}>
            What I've been building lately.
          </Typography>
        </Box>
      </Stack>

      <Box className="gh-heatmap">
        <img
          src={heatmapSrc}
          alt={`${resumeData.name} GitHub contribution graph`}
          loading="lazy"
        />
      </Box>

      <Box className="gh-stats-row">
        <StatCard light={statsLight} dark={statsDark} alt="GitHub overall stats" />
        <StatCard light={topLangsLight} dark={topLangsDark} alt="Top languages used on GitHub" />
      </Box>

      <Box mt={2}>
        <a className="gh-link" href={resumeData.github} target="_blank" rel="noopener noreferrer">
          View profile on GitHub →
        </a>
      </Box>
    </Box>
  );
}

import { Box, Grid, Stack, Typography } from '@mui/material';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import { resumeData } from '../../data/resumeData';
import './About.css';


const stats = [
  { value: '5+', label: 'Years of full-stack engineering' },
  { value: '3+', label: 'Years leading engineering teams' },
  { value: '1000+', label: 'Commits shipped across production projects' },
  { value: '4', label: 'Domains shipped in — Healthcare, Travel, EdTech, SaaS' },
];

export default function About() {
  return (
    <CollapsibleSection id="about" eyebrow="01 — About" title="A short introduction." defaultOpenOnMobile>
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12} md={7}>
          <Stack spacing={2.5}>
            {resumeData.about.map((p, i) => (
              <Typography key={i} variant="body1" color="text.secondary">
                {p}
              </Typography>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box className="stats-grid">
            {stats.map((s) => (
              <Box key={s.label} className="stat-card">
                <Typography variant="h3" component="div" sx={{ color: 'primary.main', mb: 0.5 }}>
                  {s.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">{s.label}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </CollapsibleSection>
  );
}

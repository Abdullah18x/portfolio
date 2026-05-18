import { Box, Grid, Typography } from '@mui/material';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import { resumeData } from '../../data/resumeData';
import './Languages.css';

export default function Languages() {
  return (
    <CollapsibleSection
      id="languages"
      eyebrow="09 — Languages"
      title="Spoken languages."
      description="Languages I work in — useful context for cross-team collaboration and clients across regions."
    >
      <Grid container spacing={2}>
        {resumeData.spokenLanguages.map((lang) => (
          <Grid item xs={6} sm={6} md={3} key={lang.name}>
            <Box className="lang-card">
              <span className="lang-flag" aria-hidden="true">{lang.flag}</span>
              <Box className="lang-info">
                <Typography variant="h6" component="h3" sx={{ fontSize: '1rem', mb: 0.25 }}>
                  {lang.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
                  {lang.proficiency}
                </Typography>
              </Box>
              <span className="lang-level">{lang.level}</span>
            </Box>
          </Grid>
        ))}
      </Grid>
    </CollapsibleSection>
  );
}

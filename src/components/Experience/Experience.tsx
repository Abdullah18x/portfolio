import { Box, Chip, Stack, Typography } from '@mui/material';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import { experienceData } from '../../data/experienceData';
import './Experience.css';

export default function Experience() {
  return (
    <CollapsibleSection
      id="experience"
      eyebrow="03 — Experience"
      title="Professional experience."
      description="Engineering roles from co-founding a software studio to senior IC work on regulated healthcare SaaS."
    >
      <Box className="timeline">
        {experienceData.map((job) => (
          <article key={job.role + job.company} className="timeline-item">
            <div className="timeline-rail" aria-hidden>
              <div className="timeline-dot" />
            </div>

            <Box className="timeline-content">
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ sm: 'baseline' }}
                justifyContent="space-between"
                spacing={1}
                mb={1}
              >
                <Typography variant="h5" component="h3">
                  {job.role}
                </Typography>
                <Typography variant="overline" color="text.secondary">
                  {job.period}
                </Typography>
              </Stack>

              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1 }}>
                {job.company}
                {job.client && <span style={{ color: 'var(--text-muted)' }}> · {job.client}</span>}
                {job.location && <span style={{ color: 'var(--text-muted)' }}> · {job.location}</span>}
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={2}>
                {job.summary}
              </Typography>

              <Box component="ul" className="highlight-list">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </Box>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={2}>
                {job.stack.map((t) => (
                  <Chip key={t} label={t} size="small" />
                ))}
              </Stack>
            </Box>
          </article>
        ))}
      </Box>
    </CollapsibleSection>
  );
}

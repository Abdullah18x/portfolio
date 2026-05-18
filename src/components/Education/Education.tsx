import { Box, Chip, Stack, Typography } from '@mui/material';
import { GraduationCap } from 'lucide-react';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import { educationData } from '../../data/educationData';
import './Education.css';

export default function Education() {
  return (
    <CollapsibleSection id="education" eyebrow="07 — Education" title="Where I trained.">
      <Stack spacing={2}>
        {educationData.map((e) => (
          <Box key={e.degree} className="edu-card">
            <Box className="edu-icon"><GraduationCap size={20} /></Box>
            <Box flex={1}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ sm: 'baseline' }}
                spacing={0.5}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="h6" component="h3">{e.degree}</Typography>
                  {e.status === 'ongoing' && (
                    <Chip
                      size="small"
                      label="Ongoing"
                      sx={{
                        height: 22,
                        fontSize: '0.7rem',
                        bgcolor: 'transparent',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      }}
                      variant="outlined"
                    />
                  )}
                </Stack>
                <Typography variant="overline" color="text.secondary">{e.period}</Typography>
              </Stack>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1 }}>
                {e.institution}
                <Typography component="span" variant="body2" color="text.secondary"> · {e.location}</Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">{e.description}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </CollapsibleSection>
  );
}

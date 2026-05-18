import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import {
  Code2,
  Layout,
  Server,
  MessageSquare,
  Database,
  Cloud,
  Activity,
  Plug,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import { skillsData } from '../../data/skillsData';
import './Skills.css';

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  'Messaging & Queues': MessageSquare,
  Databases: Database,
  'Cloud & DevOps': Cloud,
  Monitoring: Activity,
  Integrations: Plug,
  'AI & Productivity': Sparkles,
};

export default function Skills() {
  return (
    <CollapsibleSection
      id="skills"
      eyebrow="06 — Technical Skills"
      title="The stack I build with."
      description="Tools and technologies I use day-to-day, grouped by where they sit in the system."
    >
      <Grid container spacing={2.5}>
        {skillsData.map((group) => {
          const Icon = categoryIcons[group.category] ?? Code2;
          return (
            <Grid item xs={12} sm={6} md={4} key={group.category}>
              <Box className="skill-card">
                <Stack direction="row" alignItems="center" spacing={1.25}>
                  <Box className="skill-icon"><Icon size={16} /></Box>
                  <Typography
                    variant="overline"
                    sx={{ color: 'text.primary', fontWeight: 600 }}
                  >
                    {group.category}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1.5}>
                  {group.items.map((item) => (
                    <Chip key={item} label={item} size="small" />
                  ))}
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </CollapsibleSection>
  );
}

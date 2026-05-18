import { Box, Grid, Typography } from '@mui/material';
import {
  Layers,
  Users,
  TrendingUp,
  Code2,
  Server,
  Network,
  HeartPulse,
  Cloud,
  Sparkles,
} from 'lucide-react';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import { coreStrengths } from '../../data/resumeData';
import './Strengths.css';

const icons = [Layers, Users, TrendingUp, Code2, Server, Network, HeartPulse, Cloud, Sparkles];

export default function Strengths() {
  return (
    <CollapsibleSection
      id="strengths"
      eyebrow="02 — Core Strengths"
      title="Where I do my best work."
      description="A snapshot of the areas where I add the most leverage on a product team."
    >
      <Grid container spacing={2.5}>
        {coreStrengths.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Grid item xs={12} sm={6} md={4} key={s.title}>
              <Box className="strength-card">
                <Box className="strength-icon"><Icon size={20} /></Box>
                <Typography variant="h6" component="h3" sx={{ mb: 0.75 }}>{s.title}</Typography>
                <Typography variant="body2" color="text.secondary">{s.description}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </CollapsibleSection>
  );
}

import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import { Github, Package, ExternalLink, BookOpen } from 'lucide-react';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
// import GitHubActivity from '../GitHubActivity/GitHubActivity';
import { openSourceData } from '../../data/openSourceData';
import './OpenSource.css';

const linkIcon = (type: string) => {
  if (type === 'github') return <Github size={14} />;
  if (type === 'npm') return <Package size={14} />;
  if (type === 'docs') return <BookOpen size={14} />;
  return <ExternalLink size={14} />;
};

export default function OpenSource() {
  return (
    <CollapsibleSection
      id="open-source"
      eyebrow="05 — Open Source"
      title="Open source contributions."
      description="Tools and packages I've published to the JavaScript / TypeScript ecosystem alongside my product work."
    >
      <Grid container spacing={2.5}>
        {openSourceData.map((item) => (
          <Grid item xs={12} md={6} key={item.name}>
            <article className="oss-card">
              <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
                <Box className="oss-icon">
                  {item.type === 'npm-package' ? <Package size={18} /> : <Github size={18} />}
                </Box>
                <Box>
                  <Typography variant="overline" color="text.secondary">
                    {item.type === 'npm-package' ? 'NPM Package' : 'Tool / Library'}
                  </Typography>
                  <Typography variant="h5" component="h3">{item.name}</Typography>
                </Box>
              </Stack>

              <Typography variant="body2" sx={{ color: 'primary.main', mb: 1.5 }}>
                {item.tagline}
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={2}>
                {item.description}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={2}>
                {item.stack.map((t) => <Chip key={t} label={t} size="small" />)}
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {item.links.map((link) => (
                  <Button
                    key={link.href}
                    size="small"
                    variant="outlined"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={linkIcon(link.type)}
                    sx={{ py: 0.5, px: 1.5, fontSize: '0.8rem' }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </article>
          </Grid>
        ))}
      </Grid>

      {/* <GitHubActivity /> */}
    </CollapsibleSection>
  );
}

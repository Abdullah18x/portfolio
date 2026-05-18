import { Box, Button, Chip, Grid, IconButton, Stack, Typography } from '@mui/material';
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import { projectsData, PROJECTS_PER_PAGE } from '../../data/projectsData';
import type { ProjectLink } from '../../data/projectsData';
import './Projects.css';

function iconFor(type: ProjectLink['type']) {
  if (type === 'frontend' || type === 'backend' || type === 'github') return <Github size={14} />;
  return <ExternalLink size={14} />;
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const totalPages = Math.max(1, Math.ceil(projectsData.length / PROJECTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages - 1);
  const start = currentPage * PROJECTS_PER_PAGE;
  const visible = projectsData.slice(start, start + PROJECTS_PER_PAGE);

  const goPrev = () => {
    setDirection('prev');
    setPage((p) => Math.max(0, p - 1));
  };
  const goNext = () => {
    setDirection('next');
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  return (
    <CollapsibleSection
      id="projects"
      eyebrow="04 — Projects"
      title="Selected work."
      description="A few products I'm proud to have shipped — across healthcare SaaS, AI-driven travel, and education."
    >
      {totalPages > 1 && (
        <div className="projects-toolbar">
          <Stack direction="row" spacing={1.5} alignItems="center" className="projects-pagination">
            <IconButton
              onClick={goPrev}
              disabled={currentPage === 0}
              aria-label="Previous page"
              className="projects-page-btn"
              size="small"
            >
              <ChevronLeft size={18} />
            </IconButton>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', letterSpacing: '0.06em' }}
            >
              {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </Typography>
            <IconButton
              onClick={goNext}
              disabled={currentPage >= totalPages - 1}
              aria-label="Next page"
              className="projects-page-btn"
              size="small"
            >
              <ChevronRight size={18} />
            </IconButton>
          </Stack>
        </div>
      )}

      <div className="projects-grid-viewport">
        <Grid
          container
          spacing={2.5}
          key={currentPage}
          className={`projects-grid projects-grid--${direction}`}
        >
          {visible.map((p) => {
            const primaryLink = p.links?.[0];
            return (
              <Grid item xs={12} md={6} key={p.name}>
                <article className="project-card">
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1.5}>
                    <Box>
                      <Typography variant="overline" color="text.secondary">{p.domain}</Typography>
                      <Typography variant="h5" component="h3" sx={{ mt: 0.25 }}>{p.name}</Typography>
                    </Box>
                    {primaryLink && (
                      <Box
                        component="a"
                        href={primaryLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${p.name}`}
                        className="project-arrow"
                      >
                        <ArrowUpRight size={18} />
                      </Box>
                    )}
                  </Stack>

                  <Typography variant="body2" sx={{ color: 'primary.main', mb: 1.5 }}>
                    {p.tagline}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {p.description}
                  </Typography>

                  <Box component="ul" className="project-highlights">
                    {p.highlights.map((h) => <li key={h}>{h}</li>)}
                  </Box>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={2}>
                    {p.stack.map((t) => <Chip key={t} label={t} size="small" />)}
                  </Stack>

                  {p.links && p.links.length > 0 && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={2}>
                      {p.links.map((link) => (
                        <Button
                          key={link.href}
                          size="small"
                          variant="outlined"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={iconFor(link.type)}
                          sx={{ py: 0.5, px: 1.5, fontSize: '0.8rem' }}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </Stack>
                  )}

                  <Typography variant="caption" color="text.secondary" display="block" mt={2}>
                    Role · {p.role} · {p.period}
                  </Typography>
                </article>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </CollapsibleSection>
  );
}

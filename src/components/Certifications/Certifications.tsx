import { Box, Grid, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { Check, ChevronDown, ChevronLeft, ChevronRight, ExternalLink, SlidersHorizontal, ZoomIn } from 'lucide-react';
import { useMemo, useState } from 'react';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import ImageLightbox from '../ImageLightbox/ImageLightbox';
import {
  certificationsData,
  certCategories,
  CERTS_PER_PAGE,
} from '../../data/certificationsData';
import type { CertCategory } from '../../data/certificationsData';
import './Certifications.css';

type FilterValue = CertCategory | 'All';

export default function Certifications() {
  const [filter, setFilter] = useState<FilterValue>('All');
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const menuOpen = Boolean(menuAnchor);

  const filtered = useMemo(
    () => (filter === 'All' ? certificationsData : certificationsData.filter((c) => c.category === filter)),
    [filter]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / CERTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages - 1);
  const start = currentPage * CERTS_PER_PAGE;
  const visible = filtered.slice(start, start + CERTS_PER_PAGE);

  const handleFilter = (value: FilterValue) => {
    setDirection('next');
    setFilter(value);
    setPage(0);
    setMenuAnchor(null);
  };

  const filterCount = (value: FilterValue) =>
    value === 'All'
      ? certificationsData.length
      : certificationsData.filter((cert) => cert.category === value).length;
  const activeLabel = certCategories.find((c) => c.value === filter)?.label ?? 'All';

  const goPrev = () => {
    setDirection('prev');
    setPage((p) => Math.max(0, p - 1));
  };
  const goNext = () => {
    setDirection('next');
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  // Hide filter chips that have no items
  const availableCategories = certCategories.filter(
    (c) => c.value === 'All' || certificationsData.some((cert) => cert.category === c.value)
  );

  if (!certificationsData.length) return null;

  return (
    <>
      <CollapsibleSection
        id="certifications"
        eyebrow="08 — Certifications"
        title="Certifications & training."
        description="Recognized credentials that complement my on-the-job engineering experience. Filter by category or click any thumbnail to preview the certificate."
      >
        <div className="cert-toolbar">
          <button
            type="button"
            className={`cert-filter-select ${menuOpen ? 'is-open' : ''}`}
            onClick={(e) => setMenuAnchor(e.currentTarget)}
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
          >
            <SlidersHorizontal size={14} className="cert-filter-select__icon" />
            <span className="cert-filter-select__value">{activeLabel}</span>
            <span className="cert-filter-select__count">{filterCount(filter)}</span>
            <ChevronDown size={14} className="cert-filter-select__chevron" />
          </button>

          <Menu
            anchorEl={menuAnchor}
            open={menuOpen}
            onClose={() => setMenuAnchor(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slotProps={{
              paper: {
                className: 'cert-filter-menu',
                elevation: 0,
              },
            }}
          >
            {availableCategories.map((c) => {
              const active = filter === c.value;
              return (
                <MenuItem
                  key={c.value}
                  selected={active}
                  onClick={() => handleFilter(c.value as FilterValue)}
                  className="cert-filter-menu__item"
                >
                  <span className="cert-filter-menu__check">
                    {active && <Check size={14} />}
                  </span>
                  <span className="cert-filter-menu__label">{c.label}</span>
                  <span className="cert-filter-menu__count">{filterCount(c.value as FilterValue)}</span>
                </MenuItem>
              );
            })}
          </Menu>

          {totalPages > 1 && (
            <Stack direction="row" spacing={1.5} alignItems="center" className="cert-pagination">
              <IconButton
                onClick={goPrev}
                disabled={currentPage === 0}
                aria-label="Previous page"
                className="cert-page-btn"
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
                className="cert-page-btn"
                size="small"
              >
                <ChevronRight size={18} />
              </IconButton>
            </Stack>
          )}
        </div>

        <div className="cert-grid-viewport">
        <Grid
          container
          spacing={2.5}
          key={`${filter}-${currentPage}`}
          className={`cert-grid cert-grid--${direction}`}
        >
          {visible.map((c, i) => (
            <Grid item xs={12} sm={6} md={4} key={`${c.name}-${start + i}`}>
              <article className="cert-card">
                {c.image ? (
                  <button
                    type="button"
                    className="cert-tile cert-tile--image"
                    onClick={() => setPreview({ src: c.image!, alt: `${c.name} certificate` })}
                    aria-label={`Preview ${c.name} certificate`}
                  >
                    <img src={c.image} alt={`${c.name} certificate`} loading="lazy" />
                    <span className="cert-tile__zoom"><ZoomIn size={16} /></span>
                  </button>
                ) : (
                  <div className="cert-tile cert-tile--placeholder">
                    <Typography variant="overline" color="text.secondary">
                      {c.issuer}
                    </Typography>
                  </div>
                )}

                <Box className="cert-body">
                  <Typography variant="h6" component="h3" className="cert-name">
                    {c.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.main' }}>
                    {c.issuer}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    mt={1.25}
                    sx={{ color: 'text.secondary', fontSize: '0.78rem' }}
                  >
                    {c.date && <span>{c.date}</span>}
                    {c.credentialId && (
                      <span className="cert-credential">ID · {c.credentialId.slice(0, 12)}</span>
                    )}
                  </Stack>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                      aria-label={`Open ${c.name} credential`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                      <span>View credential</span>
                    </a>
                  )}
                </Box>
              </article>
            </Grid>
          ))}
        </Grid>
        </div>

        {filtered.length === 0 && (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 6 }}>
            No certifications in this category yet.
          </Typography>
        )}

      </CollapsibleSection>

      <ImageLightbox
        open={!!preview}
        src={preview?.src ?? ''}
        alt={preview?.alt ?? ''}
        onClose={() => setPreview(null)}
      />
    </>
  );
}

import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import type { Breakpoint } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';
import './CollapsibleSection.css';

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
  maxWidth?: Breakpoint | false;
  defaultOpenOnMobile?: boolean;
  className?: string;
}

export default function CollapsibleSection({
  id,
  eyebrow,
  title,
  description,
  children,
  maxWidth = 'lg',
  defaultOpenOnMobile = false,
  className = '',
}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openMobile, setOpenMobile] = useState(defaultOpenOnMobile);

  const expanded = isMobile ? openMobile : true;

  return (
    <Box component="section" id={id} className={`section ${className}`}>
      <Container maxWidth={maxWidth}>
        <div className={`collapsible ${isMobile ? 'is-mobile' : ''} ${expanded ? 'is-open' : ''}`}>
          <button
            type="button"
            className="collapsible-header"
            onClick={() => isMobile && setOpenMobile((o) => !o)}
            aria-expanded={expanded}
            aria-controls={`${id}-body`}
            disabled={!isMobile}
          >
            <div className="collapsible-heading">
              <span className="section-eyebrow">{eyebrow}</span>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.6rem' }, mb: description ? 1.5 : 0 }}
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 720, fontSize: { xs: '0.95rem', md: '1rem' } }}
                >
                  {description}
                </Typography>
              )}
            </div>
            <span className="collapsible-chevron" aria-hidden="true">
              <ChevronDown size={20} />
            </span>
          </button>

          <div id={`${id}-body`} className="collapsible-body" aria-hidden={!expanded}>
            <div className="collapsible-body-inner">{children}</div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

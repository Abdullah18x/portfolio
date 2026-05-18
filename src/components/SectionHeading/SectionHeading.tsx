import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Box mb={{ xs: 5, md: 7 }}>
      <span className="section-eyebrow">{eyebrow}</span>
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: description ? 2 : 0 }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}

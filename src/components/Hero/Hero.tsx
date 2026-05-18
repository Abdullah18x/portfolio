import { Box, Button, Container, Stack, Typography, Avatar } from '@mui/material';
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import './Hero.css';

export default function Hero() {
  return (
    <Box component="section" id="home" className="section hero">
      <Container maxWidth="lg">
        <Box className="hero-grid">
          <Box className="hero-content fade-up">
            <span className="section-eyebrow">Senior Full Stack Engineer · {resumeData.yearsOfExperience} years</span>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem' },
                mb: 2,
              }}
            >
              {resumeData.name}.
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>Senior Full Stack Engineer</Box>
              {' '}shipping production-grade software.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.08rem', maxWidth: 620, mb: 3 }}>
              {resumeData.tagline}
            </Typography>

            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: 'text.secondary', mb: 4 }}>
              <MapPin size={16} />
              <Typography variant="body2">{resumeData.location}</Typography>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                variant="contained"
                color="primary"
                href={`mailto:${resumeData.email}`}
                startIcon={<Mail size={18} />}
              >
                Get in touch
              </Button>
              <Button
                variant="outlined"
                href={resumeData.resumeUrl}
                download
                startIcon={<ArrowDownToLine size={18} />}
              >
                Download résumé
              </Button>
              <Button variant="outlined" href={resumeData.github} target="_blank" rel="noopener" startIcon={<Github size={18} />}>
                GitHub
              </Button>
              <Button variant="outlined" href={resumeData.linkedin} target="_blank" rel="noopener" startIcon={<Linkedin size={18} />}>
                LinkedIn
              </Button>
            </Stack>
          </Box>

          <Box className="hero-photo fade-up">
            <div className="photo-frame" aria-hidden="false">
              <Avatar
                alt={`${resumeData.name} — portrait`}
                src={resumeData.photo}
                sx={{ width: '100%', height: '100%', borderRadius: 0, fontSize: '4rem', bgcolor: 'background.paper' }}
              >
                {resumeData.shortName.charAt(0)}
              </Avatar>
              <div className="photo-tag">
                <span className="dot" /> Available for new roles
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

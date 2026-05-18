import { Box, Button, Stack, Typography } from '@mui/material';
import { ArrowDownToLine, Github, Gitlab, Linkedin, Mail, Phone } from 'lucide-react';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import { resumeData } from '../../data/resumeData';
import './Contact.css';

export default function Contact() {
  const telHref = `tel:${resumeData.phone.replace(/\s+/g, '')}`;

  return (
    <CollapsibleSection
      id="contact"
      eyebrow="10 — Connect"
      title="Let's build something together."
      description="I'm open to senior full-stack roles, healthcare and SaaS engineering work, cloud/backend roles, and AI-enabled product engineering. The fastest way to reach me is LinkedIn."
      className="contact-section"
    >
      <Box className="contact-card">
        <Stack spacing={3} alignItems="flex-start">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2.5, sm: 5 }}
            sx={{ width: '100%' }}
          >
            <Box>
              <Typography variant="overline" color="text.secondary" display="block" mb={0.5}>
                Email
              </Typography>
              <Typography
                component="a"
                href={`mailto:${resumeData.email}`}
                variant="body1"
                sx={{
                  textDecoration: 'none',
                  fontWeight: 600,
                  wordBreak: 'break-all',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {resumeData.email}
              </Typography>
            </Box>
            <Box>
              <Typography variant="overline" color="text.secondary" display="block" mb={0.5}>
                Phone
              </Typography>
              <Typography
                component="a"
                href={telHref}
                variant="body1"
                sx={{ textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'primary.main' } }}
              >
                {resumeData.phone}
              </Typography>
            </Box>
          </Stack>

          <Box className="contact-actions">
            <Button variant="contained" color="primary" href={`mailto:${resumeData.email}`} startIcon={<Mail size={16} />}>
              Email me
            </Button>
            <Button variant="outlined" href={telHref} startIcon={<Phone size={16} />}>
              Call
            </Button>
            <Button variant="outlined" href={resumeData.resumeUrl} download startIcon={<ArrowDownToLine size={16} />}>
              Résumé
            </Button>
            <Button variant="outlined" href={resumeData.linkedin} target="_blank" rel="noopener" startIcon={<Linkedin size={16} />}>
              LinkedIn
            </Button>
            <Button variant="outlined" href={resumeData.github} target="_blank" rel="noopener" startIcon={<Github size={16} />}>
              GitHub
            </Button>
            <Button variant="outlined" href={resumeData.gitlab} target="_blank" rel="noopener" startIcon={<Gitlab size={16} />}>
              GitLab
            </Button>
          </Box>
        </Stack>
      </Box>

      <Typography variant="caption" color="text.secondary" component="footer" sx={{ display: 'block', mt: 6, textAlign: 'center' }}>
        © {new Date().getFullYear()} {resumeData.name}.
      </Typography>
    </CollapsibleSection>
  );
}

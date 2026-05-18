export interface ContactLink {
  label: string;
  href: string;
  type: 'email' | 'phone' | 'github' | 'gitlab' | 'linkedin' | 'resume' | 'location';
}

export const contactLinks: ContactLink[] = [
  { label: 'abdullah18x@gmail.com', href: 'mailto:abdullah18x@gmail.com', type: 'email' },
  { label: '+49 163 7216071', href: 'tel:+491637216071', type: 'phone' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abd18x/', type: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Abdullah18x', type: 'github' },
  { label: 'GitLab', href: 'https://gitlab.com/abdullahEmumba', type: 'gitlab' },
  { label: 'Download Resume', href: './documents/resume.pdf', type: 'resume' },
];

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
];

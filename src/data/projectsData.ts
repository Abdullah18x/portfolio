export interface ProjectLink {
  label: string;
  href: string;
  type: 'website' | 'frontend' | 'backend' | 'github' | 'demo';
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  role: string;
  period: string;
  stack: string[];
  highlights: string[];
  links?: ProjectLink[];
}

export const PROJECTS_PER_PAGE = 4;

export const projectsData: Project[] = [
  {
    name: 'HouseCalls Pro (now TeleVox)',
    tagline: 'Omnichannel patient engagement for clinics and hospitals.',
    domain: 'Healthcare SaaS',
    role: 'Senior Full Stack Engineer',
    period: 'Sep 2021 — Present',
    description:
      'Patient engagement platform for appointment reminders, follow-ups, and personalized omnichannel outreach integrated with patient and scheduling data. Contributed to the backend systems powering scalable workflow execution in a regulated healthcare SaaS environment.',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Twilio', 'SendGrid', 'Azure'],
    highlights: [
      'Built reminder and follow-up workflows tied to live scheduling data.',
      'Integrated Twilio voice/SMS and SendGrid email channels with retry and audit logging.',
      'Delivered React UI modules used by clinical operations teams.',
    ],
    links: [
      {
        label: 'Visit website',
        href: 'https://televox.com/healthcare/televox-enterprise-edition/',
        type: 'website',
      },
    ],
  },
  {
    name: 'Digital Care Programs',
    tagline: 'Care automation across voice, web, and SMS.',
    domain: 'Healthcare SaaS · Workflow Automation',
    role: 'Senior Full Stack Engineer',
    period: 'Jun 2023 — Present',
    description:
      'Care automation platform that guides patients through their care journey using voice, web, and SMS. Led architecture and backend delivery in a NestJS-based microservices environment for scalable workflow execution in a regulated healthcare SaaS setting.',
    stack: ['NestJS', 'Microservices', 'RabbitMQ', 'Redis', 'PostgreSQL', 'SMART on FHIR', 'Kubernetes'],
    highlights: [
      'Designed event-driven workflow engine handling concurrent patient journeys.',
      'Integrated SMART on FHIR and HL7 flows with Epic and Cerner data.',
      'Implemented observability with Grafana, Prometheus, and Azure Monitor.',
    ],
    links: [
      {
        label: 'Visit website',
        href: 'https://insights.televox.com/digital-care-programs',
        type: 'website',
      },
    ],
  },
  {
    name: 'Safra',
    tagline: 'AI-driven travel planning and booking.',
    domain: 'Travel · AI',
    role: 'Full Stack Developer',
    period: 'Apr 2024 — Jun 2025',
    description:
      'AI-driven travel platform that processed customer-provided data to generate personalized travel recommendations and support itinerary generation, flight booking, hotel booking, and end-to-end travel planning workflows.',
    stack: ['React', 'GraphQL', 'Node.js', 'MongoDB', 'AI / Retrieval'],
    highlights: [
      'Built retrieval-based recommendation engine for personalized itineraries.',
      'Designed GraphQL API powering search, planning, and booking flows.',
      'Delivered end-to-end booking experience from inspiration to checkout.',
    ],
    links: [
      { label: 'Visit website', href: 'https://www.safra.io/', type: 'website' },
    ],
  },
  {
    name: 'Lighthouse',
    tagline: 'University LMS with automated code evaluation.',
    domain: 'EdTech',
    role: 'Full Stack Developer · Co-founder',
    period: 'Jan 2020 — Jul 2021',
    description:
      'University-focused LMS for lab assignments, automated code evaluation, student ranking, and targeted learning recommendations. Contributed across both UI and backend, helping build the platform foundation before handover to the university for further development.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    highlights: [
      'Built sandboxed code evaluation pipeline with isolated execution.',
      'Designed ranking and recommendation views for instructors.',
      'Shipped UI for students, faculty, and administrators.',
    ],
    links: [
      { label: 'Frontend repo', href: 'https://github.com/Abdullah18x/lighthouseFrontend', type: 'frontend' },
      { label: 'Backend repo', href: 'https://github.com/Abdullah18x/lighthouseBackend', type: 'backend' },
    ],
  },
];

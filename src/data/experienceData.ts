export interface ExperienceItem {
  role: string;
  company: string;
  client?: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'TeleVox (via EMumba) — Client Assignment',
    period: 'Sep 2021 — Present',
    location: 'Omaha, USA · Remote',
    summary:
      'Leading development of full-stack healthcare SaaS features — building React applications and scalable backend services for patient engagement and workflow automation in a regulated environment.',
    highlights: [
      'Built and enhanced data-driven UI workflows for care program management, reporting, and configuration, integrated with reliable backend APIs and processing services.',
      'Developed backend pipelines and event-driven workflows to process patient records, execute care logic, and trigger personalized communication across healthcare programs.',
      'Contributed to a NestJS microservices architecture that improved scalability, modularity, and long-term system maintainability.',
      'Helped extend Digital Care Programs into a reusable foundation for new offerings, including AI-driven patient engagement and a pharmaceutical marketplace platform.',
      'Drove cross-functional delivery by refining requirements with stakeholders and coordinating execution across backend, frontend, QA, and UI/UX teams.',
    ],
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'Node.js',
      'GraphQL',
      'RabbitMQ',
      'Redis',
      'PostgreSQL',
      'Azure',
      'Kubernetes',
      'SMART on FHIR',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'EMumba',
    period: 'Sep 2021 — Present',
    location: 'Islamabad, Pakistan',
    summary:
      'Delivering full-stack SaaS solutions across multiple projects — contributing to backend services and frontend-integrated product development on AWS-hosted environments.',
    highlights: [
      'Worked in AWS environments using EC2, S3, and IAM to support secure, reliable, and scalable delivery.',
      'Contributed to architecture planning, mentoring, and technical problem-solving across engineering teams.',
      'Supported hiring and engineer growth, and led internal sessions on backend architecture and scaling practices.',
      'Shipped backend services and React frontends across multiple SaaS engagements, owning features end-to-end.',
    ],
    stack: ['Node.js', 'Express', 'React', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    role: 'Mid-Level Full Stack Developer · Co-founder',
    company: '58 Studios',
    period: 'Jul 2020 — Aug 2021',
    location: 'Islamabad, Pakistan',
    summary:
      'Co-founded a software startup and delivered 4–5 large-scale client web applications, owning development from requirements through production release.',
    highlights: [
      'Built MERN-stack applications with hands-on work across React frontends, backend services, REST APIs, and database-driven workflows.',
      'Led development of a long-term travel platform for a Saudi client — personalized trip-planning workflows based on user preferences, budgets, flights, hotel bookings, and existing travel data.',
      'Contributed to a GraphQL-based backend on one project to support more flexible and structured frontend data access.',
      'Later enhanced the travel platform with AI-driven retrieval-based capabilities to improve recommendation quality and adaptability.',
    ],
    stack: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Express', 'REST', 'AI / Retrieval'],
  },
  {
    role: 'Mid-Level Full Stack PHP Developer',
    company: 'Cluster',
    client: 'Freelance',
    period: 'Mar 2018 — Nov 2019',
    location: 'Islamabad, Pakistan',
    summary:
      'Worked on dynamic web projects with a strong focus on frontend UI and backend logic, partnering with senior developers to ship production-ready features.',
    highlights: [
      'Built user interfaces using HTML, CSS, and JavaScript (Vanilla JS & jQuery).',
      'Implemented interactive UI features, form validations, and dynamic content updates.',
      'Developed and enhanced websites using PHP and WordPress.',
      'Converted design mockups into responsive, pixel-accurate web pages.',
      'Collaborated with senior developers on feature development and performance optimizations.',
      'Ensured usability, performance, and cross-browser compatibility across deliverables.',
    ],
    stack: ['PHP', 'MySQL', 'WordPress', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
  },
  {
    role: 'Entry-Level Full Stack PHP Developer',
    company: 'Mehmood Traders',
    client: 'Contract',
    period: 'Jan 2017 — Apr 2018',
    location: 'Islamabad, Pakistan',
    summary:
      'First professional engineering role — contributed to a complex internal project alongside a team of senior developers, building practical web applications from requirements to delivery.',
    highlights: [
      'Managed and contributed to a complex client project from kickoff through delivery.',
      'Collaborated with a team of skilled developers to build an Inventory Management System.',
      'Translated requirements into a polished, high-level website with a clean user experience.',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
  },
];

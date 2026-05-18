export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'SQL', 'Python'] },
  {
    category: 'Frontend',
    items: ['React.js', 'Redux', 'Ant Design', 'Material UI', 'Bootstrap', 'Formik', 'Yup', 'React Flow', 'Recharts'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices', 'Event-Driven Architecture'],
  },
  { category: 'Messaging & Queues', items: ['RabbitMQ', 'Redis', 'BullMQ', 'Agenda', 'Azure Service Bus'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'Azure Functions', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Azure DevOps'],
  },
  { category: 'Monitoring', items: ['Azure Monitor', 'ELK Stack', 'Grafana', 'Prometheus'] },
  {
    category: 'Integrations',
    items: ['Twilio', 'SendGrid', 'Epic EHR', 'Cerner', 'NextGen', 'SMART on FHIR', 'HL7'],
  },
  { category: 'AI & Productivity', items: ['Cursor', 'GitHub Copilot', 'ChatGPT', 'Claude Code'] },
];

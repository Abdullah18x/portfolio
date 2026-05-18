export type CertIssuer = 'hackerrank' | 'deeplearning-ai' | 'evs' | 'other';

export type CertCategory =
  | 'Programming'
  | 'Databases'
  | 'AI'
  | 'Cloud & DevOps'
  | 'General';

export interface Certification {
  name: string;
  issuer: string;
  issuerKey: CertIssuer;
  category: CertCategory;
  date?: string;
  credentialId?: string;
  url?: string;
  image?: string;
}

export const certCategories: { value: CertCategory | 'All'; label: string }[] = [
  { value: 'All',            label: 'All' },
  { value: 'Programming',    label: 'Programming' },
  { value: 'Databases',      label: 'Databases' },
  { value: 'AI',             label: 'AI' },
  { value: 'Cloud & DevOps', label: 'Cloud & DevOps' },
  { value: 'General',        label: 'General' },
];

export const certificationsData: Certification[] = [
  {
    name: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    issuerKey: 'hackerrank',
    category: 'Programming',
    credentialId: '0ea8f0888378',
    url: 'https://www.hackerrank.com/certificates/0ea8f0888378',
    image: './images/javascript_basic certificate.png',
  },
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    issuerKey: 'hackerrank',
    category: 'Databases',
    credentialId: '3f2821ba070b',
    url: 'https://www.hackerrank.com/certificates/iframe/3f2821ba070b',
    image: './images/sql_basic certificate.png',
  },
  {
    name: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    issuerKey: 'hackerrank',
    category: 'Databases',
    credentialId: '41da7ec14665',
    url: 'https://www.hackerrank.com/certificates/iframe/41da7ec14665',
    image: './images/sql_intermediate certificate.png',
  },
  {
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    issuerKey: 'hackerrank',
    category: 'Databases',
    credentialId: '41da7ec14665',
    url: 'https://www.hackerrank.com/certificates/iframe/41da7ec14665',
    image: './images/sql_advanced certificate.png',
  },
  {
    name: 'ChatGPT Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    issuerKey: 'deeplearning-ai',
    category: 'AI',
    credentialId: '0ca05a63-3689-4599-b3dd-04f93e63842e',
    url: 'https://learn.deeplearning.ai/accomplishments/0ca05a63-3689-4599-b3dd-04f93e63842e?usp=sharing',
    image: './images/ChatGPT Prompt Engineering for Developers.png',
  },
  {
    name: 'Certified PHP Web Developer',
    issuer: 'EVS',
    issuerKey: 'evs',
    category: 'Programming',
    image: './images/EVS certificate.png',
  },
];

export const CERTS_PER_PAGE = 6;

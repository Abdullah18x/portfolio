export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  status?: 'ongoing' | 'completed';
}

export const educationData: EducationItem[] = [
  {
    degree: "Master's in Computer Science",
    institution: 'University of Bayreuth',
    location: 'Bayreuth, Germany',
    period: '2024 — Present',
    status: 'ongoing',
    description:
      'Currently pursuing an MS in Computer Science with focus areas around advanced software engineering, distributed systems, and applied AI — deepening the theoretical foundations behind my production engineering work.',
  },
  {
    degree: "Bachelor's in Software Engineering",
    institution: 'COMSATS University',
    location: 'Islamabad, Pakistan',
    period: 'Sep 2017 — Jul 2021',
    status: 'completed',
    description:
      'Built a strong foundation in software architecture, software development, databases, algorithms, and system design — the basis for the production engineering work I do today.',
  },
];

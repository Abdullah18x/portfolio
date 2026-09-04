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
    degree: "Data Science (M.Sc.)",
    institution: 'Universität Augsburg',
    location: 'Augsburg, Germany',
    period: '2026 — Present',
    status: 'ongoing',
    description:
      'Currently pursuing an MS in Data Science with focus on concepts and methods of data science, incorporating knowledge and methodology from Computer Science and Mathematics.',
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

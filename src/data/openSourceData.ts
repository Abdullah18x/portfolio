export interface OpenSourceItem {
  name: string;
  tagline: string;
  description: string;
  type: 'npm-package' | 'tool' | 'library' | 'contribution';
  stack: string[];
  links: {
    label: string;
    href: string;
    type: 'github' | 'npm' | 'docs' | 'website';
  }[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export const openSourceData: OpenSourceItem[] = [
  {
    name: 'fn-tracer',
    tagline: 'Lightweight function-level tracer for Node.js.',
    description:
      'An open-source tracing utility I built to instrument and visualize function-level execution paths in Node.js applications — useful for debugging async flows, latency hotspots, and call-graph behavior in production-grade backends. Published to npm.',
    type: 'npm-package',
    stack: ['Node.js', 'TypeScript', 'Tracing', 'npm'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/fn-tracer', type: 'npm' },
      { label: 'GitHub', href: 'https://github.com/Abdullah18x/fn_tracer', type: 'github' },
    ],
  },
];

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string; // full DOI URL, e.g. https://doi.org/10.1145/...
  pdf?: string; // path or URL to PDF
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title: 'Designing for Uncertainty: Adaptive Interfaces in High-Stakes Environments',
    authors: ['Wenhan Lyu', 'Author B', 'Author C'],
    venue: 'CHI 2025',
    year: 2025,
    doi: 'https://doi.org/10.1145/3706598.0000001',
    pdf: '/papers/chi2025-adaptive-interfaces.pdf',
    featured: true,
  },
  {
    title: 'LLM-Powered UI Adaptation: A Longitudinal User Study',
    authors: ['Wenhan Lyu', 'Author D', 'Author E'],
    venue: 'UIST 2024',
    year: 2024,
    doi: 'https://doi.org/10.1145/3654777.0000002',
    pdf: '/papers/uist2024-llm-adaptation.pdf',
    featured: true,
  },
  {
    title: 'Accessible Data Visualization for Screen Reader Users',
    authors: ['Author F', 'Wenhan Lyu', 'Author G'],
    venue: 'ASSETS 2024',
    year: 2024,
    doi: 'https://doi.org/10.1145/3663548.0000003',
    featured: false,
  },
  {
    title: 'Understanding Breakdowns in Human-AI Collaboration',
    authors: ['Wenhan Lyu', 'Author H', 'Author I', 'Author J'],
    venue: 'DIS 2023',
    year: 2023,
    doi: 'https://doi.org/10.1145/3563657.0000004',
    pdf: '/papers/dis2023-breakdowns.pdf',
    featured: false,
  },
];

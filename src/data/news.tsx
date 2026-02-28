import type { ReactNode } from 'react';

export type NewsItem = {
  id: string;
  date: string; // YYYY-MM format
  content: ReactNode; // supports plain strings or JSX with inline links/formatting
};

// Shared inline link style — copy this pattern for links inside news content.
const lnk = (href: string, text: ReactNode) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-colors"
  >
    {text}
  </a>
);

export const newsItems: NewsItem[] = [
  {
    id: '7',
    date: '2026-01',
    content: (
      <>
        Our paper{' '}
        {lnk(
          'https://arxiv.org/abs/2601.17962',
          'Designing AI Peers for Collaborative Mathematical Problem Solving with Middle School Students: A Participatory Design Study',
        )}{' '}
        has been accepted by <b>CHI 2026</b>.
      </>
    ),
  },
  {
    id: '6',
    date: '2025-04',
    content: (
      <>
        Our paper{' '}
        {lnk(
          'https://arxiv.org/abs/2505.08119',
          'Will Your Next Pair Programming Partner Be Human? An Empirical Evaluation of Generative AI as a Collaborative Teammate in a Semester-Long Classroom Setting',
        )}{' '}
        has been accepted by <b>Learning @ Scale 2025</b>.
      </>
    ),
  },
  {
    id: '5',
    date: '2025-02',
    content: (
      <>
        Our paper{' '}
        {lnk(
          'https://doi.org/10.1016/j.caeai.2025.100383',
          'Understanding the Practices, Perceptions, and (Dis)Trust of Generative AI among Instructors: A Mixed-methods Study in the U.S. Higher Education',
        )}{' '}
        has been accepted by{' '}
        <b>Computers and Education: Artificial Intelligence</b> (CiteScore: 28.7).
      </>
    ),
  },
  {
    id: '3',
    date: '2024-09',
    content: (
      <>
        Our paper{' '}
        {lnk('https://arxiv.org/abs/2401.05561', 'TrustLLM: Trustworthiness in Large Language Models')}{' '}
        has been accepted by <b>ICML 2024</b>.
      </>
    ),
  },
  {
    id: '4',
    date: '2024-07',
    content: 'Received $5,000 API Credits from OpenAI Researcher Access Program.',
  },
  {
    id: '2',
    date: '2024-06',
    content:
      'Received a research grant from Research Graduate Studies Advisory Board (GSAB) "Seed Grants" of W&M.',
  },
  {
    id: '1',
    date: '2024-04',
    content: (
      <>
        Our paper{' '}
        {lnk(
          'https://dl.acm.org/doi/abs/10.1145/3657604.3662036',
          'Evaluating the Effectiveness of LLMs in Introductory Computer Science Education: A Semester-Long Field Study',
        )}{' '}
        has been accepted by <b>Learning @ Scale 2024</b>.
      </>
    ),
  },
];

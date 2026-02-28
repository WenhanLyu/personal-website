export type NewsItem = {
  id: string;
  date: string; // YYYY-MM format
  content: string;
  link?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    date: '2025-01',
    content:
      'Paper "Designing for Uncertainty: Adaptive Interfaces in High-Stakes Environments" accepted to CHI 2025.',
    link: '#',
  },
  {
    id: '2',
    date: '2024-11',
    content:
      'Gave a talk at UIST 2024 Doctoral Symposium on my research on LLM-powered UI adaptation.',
  },
  {
    id: '3',
    date: '2024-09',
    content: 'Started second year of PhD. New project on accessible data visualization underway.',
  },
  {
    id: '4',
    date: '2024-06',
    content: 'Received [Fellowship Name] fellowship for the 2024–2025 academic year.',
  },
  {
    id: '5',
    date: '2024-04',
    content:
      'Attended CHI 2024 in Honolulu, HI. Great conversations on AI-mediated interaction design.',
  },
  {
    id: '6',
    date: '2023-09',
    content: 'Started PhD in Computer Science at [University Name]. Advised by [Advisor Name].',
  },
];

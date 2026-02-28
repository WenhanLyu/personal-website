export type SocialLink = {
  id: 'linkedin' | 'scholar' | 'cv' | 'github';
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lyu-wenhan/',
  },
  {
    id: 'scholar',
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=CceUXEYAAAAJ',
  },
  {
    id: 'cv',
    label: 'CV',
    href: '/wenhanlyu_cv_2026.pdf',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/WenhanLyu',
  },
];

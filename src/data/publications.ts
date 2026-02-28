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
    title: 'Designing AI Peers for Collaborative Mathematical Problem Solving with Middle School Students: A Participatory Design Study',
    authors: ['Wenhan Lyu', 'Yimeng Wang', 'Murong Yue', 'Yifan Sun', 'Jennifer Suh', 'Meredith Kier', 'Ziyu Yao', 'Yixuan Zhang'],
    venue: 'CHI \'26',
    year: 2026,
    doi: 'https://arxiv.org/abs/2601.17962',
    pdf: 'https://arxiv.org/pdf/2601.17962',
    featured: true,
  },
  {
    title: 'Will Your Next Pair Programming Partner Be Human? An Empirical Evaluation of Generative AI as a Collaborative Teammate in a Semester-Long Classroom Setting',
    authors: ['Wenhan Lyu', 'Yimeng Wang', 'Yifan Sun', 'Yixuan Zhang'],
    venue: 'Learning @ Scale 2025',
    year: 2025,
    doi: 'https://dl.acm.org/doi/abs/10.1145/3698205.3729544',
    pdf: 'https://arxiv.org/pdf/2505.08119',
    featured: true,
  },
  {
    title: 'Understanding the Practices, Perceptions, and (Dis)Trust of Generative AI among Instructors: A Mixed-methods Study in the U.S. Higher Education',
    authors: ['Wenhan Lyu', 'Shuang Zhang', 'Tingting (Rachel) Chung', 'Yifan Sun', 'Yixuan Zhang'],
    venue: 'Computers and Education: Artificial Intelligence',
    year: 2025,
    doi: 'https://doi.org/10.1016/j.caeai.2025.100383',
    pdf: "https://arxiv.org/pdf/2502.05770",
    featured: true,
  },
  {
    title: 'MathVC: An LLM-Simulated Multi-Character Virtual Classroom for Mathematics Education',
    authors: ['Murong Yue*', 'Wenhan Lyu*', 'Wijdane Mifdal', 'Jennifer Suh', 'Yixuan Zhang', 'Ziyu Yao'],
    venue: 'AAAI 25 AI4EDU Workshop',
    year: 2025,
    doi: 'https://arxiv.org/abs/2404.06711',
    pdf: 'https://arxiv.org/pdf/2404.06711',
    featured: false,
  },
  {
    title: 'Evaluating the Effectiveness of LLMs in Introductory Computer Science Education: A Semester-Long Field Study',
    authors: ['Wenhan Lyu', 'Yimeng Wang', 'Tingting (Rachel) Chung', 'Yifan Sun', 'Yixuan Zhang'],
    venue: 'Learning @ Scale 2024',
    year: 2024,
    doi: 'https://dl.acm.org/doi/abs/10.1145/3657604.3662036',
    pdf: 'https://arxiv.org/pdf/2404.13414',
    featured: true,
  },
    {
    title: 'TrustLLM: Trustworthiness in Large Language Models',
    authors: ['Lichao Sun', 'Yue Huang', 'Haoran Wang', 'Siyuan Wu', 'Qihui Zhang', 'Chujie Gao', 'Yixin Huang', 'Wenhan Lyu', 'Yixuan Zhang', 'et al.'],
    venue: 'ICML \'24',
    year: 2024,
    doi: 'https://arxiv.org/abs/2401.05561',
    pdf: 'https://arxiv.org/pdf/2401.05561',
    featured: false,
  },
];

export type ResearchItem = {
  id: string;
  title: string;
  description: string;
  image?: string; // path to image in /public, e.g. '/research/adaptive-ui.jpg'
  href?: string;  // link to a related paper, video, or project page
};

export const researchItems: ResearchItem[] = [
  {
    id: '1',
    title: 'GenAI in Learning Environments',
    description:
      'I study how students and instructors perceive and interact with GenAI in educational settings, including mental models, trust, and practices that align or conflict with pedagogical goals. This work informs the design of GenAI agents as genuine learning supports, whether as tutors or collaborative peers.',
    // image: '/research/adaptive-ui.jpg',
    // href: '#',
  },
  {
    id: '2',
    title: 'LLMs for Programming Practices',
    description:
      'I investigate whether coding agents can act as assistants, equal collaborators, or executors for programmers, and how its integration reshapes what it means to learn to code. This includes how workflows like vibe coding may shift attention toward higher-order skills such as UX design and problem decomposition.',
    // image: '/research/genai-programming-education.jpg',
    // href: '#',
  },
];

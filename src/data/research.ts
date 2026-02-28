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
    title: 'Adaptive Intelligent Interfaces',
    description:
      'How can UIs learn from user behavior and context to proactively reduce cognitive load? I build and study systems that reshape themselves in response to user goals, expertise, and environment — from clinical decision-support dashboards to open-ended creative tools.',
    // image: '/research/adaptive-ui.jpg',
    href: '#',
  },
  {
    id: '2',
    title: 'Human–AI Collaboration & Breakdowns',
    description:
      'LLM-powered tools introduce new failure modes: hallucinated information, opaque reasoning, and misaligned agency. My work identifies when and why human–AI collaboration breaks down, and designs interaction patterns that keep humans appropriately and comfortably in the loop.',
    // image: '/research/hai-breakdowns.jpg',
    href: '#',
  },
  {
    id: '3',
    title: 'Accessible & Inclusive Design',
    description:
      'I investigate how people with sensory and motor differences interact with data-rich interfaces, and co-design adaptive accessibility features that go beyond compliance checklists to achieve genuine, context-sensitive usability.',
    // image: '/research/accessibility.jpg',
  },
];

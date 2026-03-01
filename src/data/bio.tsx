import type { ReactNode } from 'react';

type BioLinkProps = {
  href: string;
  children: ReactNode;
  italic?: boolean;
};

const BioLink = ({ href, children, italic = false }: BioLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors${italic ? ' italic' : ''}`}
    >
      {children}
    </a>
  );
};

export const sharedBioSummary: ReactNode = (
  <>
    I am a third-year PhD candidate in{' '}
    <BioLink href="https://www.wm.edu/as/computerscience/">Computer Science</BioLink> at{' '}
    <BioLink href="https://www.wm.edu/">William &amp; Mary</BioLink>, luckily advised by{' '}
    <BioLink href="https://zjanice.github.io/" italic>
      Prof. Yixuan (Janice) Zhang
    </BioLink>
    . My research sits at the intersection of <b>Human-Computer Interaction (HCI)</b> and{' '}
    <b>Generative AI (GenAI)</b>. I am broadly interested in how LLMs reshape learning
    experiences across K-12 and undergraduate contexts, as well as how they impact coding
    practices and education.
  </>
);

export const aboutBioParagraphs: ReactNode[] = [
  sharedBioSummary,
  <>
    Before my PhD, I obtained my M.S. in{' '}
    <BioLink href="https://cs.nyu.edu/home/index.html">Computer Science</BioLink> and B.Eng. in{' '}
    <BioLink href="https://encc.nankai.edu.cn/">Computer Science and Technology</BioLink> from{' '}
    <BioLink href="https://www.nyu.edu/">New York University</BioLink> and{' '}
    <BioLink href="https://en.nankai.edu.cn/">Nankai University</BioLink>, respectively.
  </>,
  <>Outside of research, I enjoy motorsports (Formula 1 & endurance series) and reading.</>,
];

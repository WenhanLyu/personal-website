import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About — Wenhan Lyu',
};

const About = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-36 pb-16">
      <FadeIn>
        <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
          About
        </h1>
      </FadeIn>

      {/* Bio */}
      <FadeIn delay={100}>
        <section className="mb-16">
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            I am a PhD student in Computer Science at [University Name], advised by{' '}
            <a href="#" className="underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-colors">
              [Advisor Name]
            </a>
            . My research sits at the intersection of{' '}
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">
              Human-Computer Interaction
            </strong>
            ,{' '}
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">UI/UX design</strong>,
            and{' '}
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">
              artificial intelligence
            </strong>
            .
          </p>
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            I design and evaluate intelligent interfaces that adapt to users&apos; needs, with a
            focus on high-stakes and accessibility-sensitive domains. I draw on both quantitative
            and qualitative methods to understand how people interact with AI-powered systems.
          </p>
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Before my PhD, I received a B.S. in [Field] from [Undergraduate University]. Outside
            of research, I enjoy typography, generative art, and long-distance running.
          </p>
        </section>
      </FadeIn>

      {/* Research Interests */}
      <FadeIn delay={160}>
        <section className="mb-16 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Research Interests
          </h2>
          <ul className="space-y-3">
            {[
              'Adaptive and intelligent user interfaces',
              'Human-AI interaction and collaboration',
              'Accessible and inclusive design',
              'Mixed-methods HCI research',
              'Visualization and information design',
            ].map((interest) => (
              <li key={interest} className="flex gap-3 text-base text-zinc-700 dark:text-zinc-300">
                <span className="text-zinc-300 dark:text-zinc-600 select-none">—</span>
                {interest}
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Education */}
      <FadeIn delay={220}>
        <section className="mb-16 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Education
          </h2>
          <ul className="space-y-8">
            {[
              {
                degree: 'PhD in Computer Science',
                school: '[University Name]',
                period: '2023 — Present',
                note: 'Advised by [Advisor Name]',
              },
              {
                degree: 'B.S. in [Field]',
                school: '[Undergraduate University]',
                period: '2019 — 2023',
                note: 'Graduated with Honors',
              },
            ].map((edu) => (
              <li key={edu.degree} className="flex gap-6">
                <span className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500 w-32 pt-0.5">
                  {edu.period}
                </span>
                <div>
                  <p className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.school}</p>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">{edu.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Links */}
      <FadeIn delay={280}>
        <section className="border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Links
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'GitHub ↗', href: 'https://github.com/' },
              { label: 'LinkedIn ↗', href: 'https://linkedin.com/' },
              { label: 'Google Scholar ↗', href: 'https://scholar.google.com/' },
              { label: 'Download CV ↗', href: '/cv.pdf' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-zinc-300 dark:border-zinc-600 hover:border-zinc-900 dark:hover:border-zinc-100 pb-px"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default About;

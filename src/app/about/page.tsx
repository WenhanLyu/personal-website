import type { Metadata } from 'next';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { aboutBioParagraphs } from '@/data/bio';

export const metadata: Metadata = {
  title: 'About — Wenhan Lyu',
};

type MiscGraphic = {
  id: string;
  title: string;
  description?: string;
  image?: string; // path in /public, e.g. '/misc/figure-1.jpg'
  alt?: string;
};

const miscSectionData: { paragraphs: string[]; graphics: MiscGraphic[] } = {
  paragraphs: [
    'I love penguins 🐧.',
  ],
  graphics: [
    {
      id: 'img-1',
      title: 'License Plate',
      image: '/plate.png',
      description: 'My previous license plate.',
    },
  ],
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
        <section className="mb-8">
          {aboutBioParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-base text-zinc-700 dark:text-zinc-300 leading-relaxed${index < aboutBioParagraphs.length - 1 ? ' mb-4' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </section>
      </FadeIn>

      {/* Research Interests */}
      {/* <FadeIn delay={160}>
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
      </FadeIn> */}

      {/* Education */}
      <FadeIn delay={220}>
        <section className="mb-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Education
          </h2>
          <ul className="space-y-4">
            {[
              {
                degree: 'PhD in Computer Science',
                school: 'William & Mary',
                period: '2024 - Present',
                note: 'Advised by Prof. Janice Zhang',
              },
              {
                degree: 'M.S. in Computer Science',
                school: 'New York University',
                period: '2021 - 2023',
              },
              {
                degree: 'B.Eng. in Computer Science and Technology',
                school: 'Nankai University',
                period: '2016 - 2020',
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

      {/* Teaching Experience */}
      <FadeIn delay={220}>
        <section className="mb-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Selected Teaching Experience
          </h2>
          <ul className="space-y-2">
            {[
              {
                semester: 'Spring 2026',
                role: 'Teaching Assistant',
                course: 'CSCI 456: Large Language Models',
                note: ''
              },
              {
                semester: 'Fall 2025',
                role: 'Teaching Assistant',
                course: 'CSCI 432 Web Programming',
              },
              {
                semester: 'Fall 2024',
                role: 'Teaching Assistant',
                course: 'CSCI 432 Web Programming',
                note: (
                  <>
                    Designed this new course with{' '}
                    <a
                      href="https://sarchlab.org/syifan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                    >
                      Prof. Yifan Sun
                    </a>{' '}
                    at W&amp;M!
                  </>
                ),
              },
              {
                semester: 'Spring 2023',
                role: 'Teaching Assistant',
                course: 'CSCI-GA.2250 Operating Systems',
                note: 'At New York University'
              },
            ].map((edu) => (
              <li key={edu.semester} className="flex gap-6">
                <span className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500 w-32 pt-0.5">
                  {edu.semester}
                </span>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {edu.role} in <i>{edu.course}</i>
                  </p>
                  {edu.note ? (
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 italic">{edu.note}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Misc */}
      <FadeIn delay={280}>
        <section className="mb-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Misc
          </h2>

          <div className="space-y-4">
            {miscSectionData.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {miscSectionData.graphics.map((graphic) => (
              <figure
                key={graphic.id}
                className="border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/40 p-4"
              >
                <div className="relative h-40 flex items-center justify-center text-zinc-400 dark:text-zinc-500 text-sm">
                  {graphic.image ? (
                    <Image
                      src={graphic.image}
                      alt={graphic.alt ?? graphic.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    graphic.title
                  )}
                </div>
                {graphic.description ? (
                  <figcaption className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    {graphic.description}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default About;

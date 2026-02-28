import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import { publications } from '@/data/publications';

export const metadata: Metadata = {
  title: 'Publications — Wenhan Lyu',
};

const Publications = () => {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <div className="mx-auto max-w-3xl px-6 pt-36 pb-16">
      <FadeIn>
        <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Publications
        </h1>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-12">
          * indicates equal contribution
        </p>
      </FadeIn>

      {years.map((year) => {
        const yearPubs = publications.filter((p) => p.year === year);
        return (
          <FadeIn key={year}>
            <section className="mb-14 border-t border-zinc-200 dark:border-zinc-800 pt-10">
              <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
                {year}
              </h2>
              <ul className="space-y-10">
                {yearPubs.map((pub, i) => (
                  <FadeIn key={pub.title} as="li" delay={i * 80} className="flex gap-4">
                    {/* <div className="pt-1.5 shrink-0 w-4">
                      {pub.featured && (
                        <span
                          className="block w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                          title="Featured"
                        />
                      )}
                    </div> */}
                    <div>
                      <p className="text-base font-medium text-zinc-800 dark:text-zinc-200 leading-snug mb-2">
                        {pub.doi ? (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                        {pub.authors.map((author, idx) => (
                          <span key={author}>
                            {author.includes('Wenhan Lyu') ? (
                              <strong className="font-medium text-zinc-700 dark:text-zinc-300">
                                {author}
                              </strong>
                            ) : (
                              author
                            )}
                            {idx < pub.authors.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </p>
                      <p className="text-sm text-zinc-400 dark:text-zinc-500">{pub.venue}</p>
                      <div className="flex gap-3 mt-2">
                        {pub.pdf && (
                          <a
                            href={pub.pdf}
                            className="text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-zinc-300 dark:border-zinc-600 hover:border-zinc-900 dark:hover:border-zinc-100 pb-px"
                          >
                            PDF ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </ul>
            </section>
          </FadeIn>
        );
      })}
    </div>
  );
};

export default Publications;

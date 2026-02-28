import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import { newsItems } from '@/data/news';

export const metadata: Metadata = {
  title: 'News — Wenhan Lyu',
};

const formatDate = (dateStr: string) => {
  const [year, month] = dateStr.split('-');
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

const News = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-36 pb-16">
      <FadeIn>
        <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
          News
        </h1>
      </FadeIn>

      <ul className="divide-y divide-zinc-100 dark:divide-zinc-900">
        {newsItems.map((item, i) => (
          <FadeIn key={item.id} as="li" delay={i * 60} className="flex gap-6 py-8">
            <time className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500 w-28 pt-0.5">
              {formatDate(item.date)}
            </time>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {item.content}
            </p>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
};

export default News;

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Wenhan Lyu',
};

const NotFound = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-36 pb-16">
      <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
        404
      </h1>
      <p className="text-base text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-zinc-300 dark:border-zinc-600 hover:border-zinc-900 dark:hover:border-zinc-100 pb-px"
      >
        ← Back home
      </Link>
    </div>
  );
};

export default NotFound;

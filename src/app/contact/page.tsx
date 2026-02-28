import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Contact — Wenhan Lyu',
};

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-36 pb-16">
      <FadeIn>
        <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
          Contact
        </h1>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="mb-16">
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            I&apos;m always happy to chat about research, collaboration, or anything HCI-related.
            The best way to reach me is by email.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={160}>
        <section className="mb-16 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Email
          </h2>
          <a
            href="mailto:yourname@university.edu"
            className="text-base text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
          >
            yourname@university.edu
          </a>
        </section>
      </FadeIn>

      <FadeIn delay={220}>
        <section className="mb-16 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Office
          </h2>
          <address className="not-italic text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Room [Number], [Building Name]
            <br />
            [University Name]
            <br />
            [City], [State] [ZIP]
          </address>
        </section>
      </FadeIn>

      <FadeIn delay={280}>
        <section className="border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Online
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { label: 'GitHub', href: 'https://github.com/' },
              { label: 'LinkedIn', href: 'https://linkedin.com/' },
              { label: 'Google Scholar', href: 'https://scholar.google.com/' },
              { label: 'Twitter / X', href: 'https://twitter.com/' },
            ].map((link) => (
              <div key={link.href} className="flex gap-6">
                <span className="text-sm text-zinc-400 dark:text-zinc-500 w-28 shrink-0">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  {link.href} ↗
                </a>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Contact;

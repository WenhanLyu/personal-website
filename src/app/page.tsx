import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { newsItems } from '@/data/news';
import { publications } from '@/data/publications';
import { researchItems } from '@/data/research';
import { socialLinks } from '@/data/socialLinks';
import { sharedBioSummary } from '@/data/bio';

// Set to a path inside /public to display a real profile photo, e.g. '/photo.jpg'.
// Leave empty to show the silhouette placeholder.
const PROFILE_PHOTO = '/me.png';

const formatDate = (dateStr: string) => {
  const [year, month] = dateStr.split('-');
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

// ── Inline SVG icons ─────────────────────────────────────────────────────────

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconScholar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
    <path d="M12 3 2 8l10 5 8-4v5h2V8L12 3z" />
    <path d="M6 11.2V15c0 2.2 3.1 4 6 4s6-1.8 6-4v-3.8l-6 3-6-3z" />
    <circle cx="21" cy="16.5" r="1.5" />
  </svg>
);

const IconCV = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="6"
      fontWeight="600"
      letterSpacing="0.4"
      fill="currentColor"
      stroke="none"
    >
      CV
    </text>
  </svg>
);

// ── Profile photo ─────────────────────────────────────────────────────────────
// Place your photo (e.g. photo.jpg) in /public and set PROFILE_PHOTO = '/photo.jpg' above.
// When src is empty the silhouette placeholder is shown instead.

const ProfilePhoto = ({ src }: { src?: string }) => {
  const base =
    'w-40 h-40 sm:w-48 sm:h-48 shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800';

  if (src) {
    return (
      <div className={base}>
        <Image
          src={src}
          alt="Profile photo"
          width={192}
          height={192}
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`${base} flex items-center justify-center`}>
      <svg
        viewBox="0 0 80 80"
        fill="none"
        className="w-24 h-24 text-zinc-300 dark:text-zinc-700"
        aria-hidden
      >
        <circle cx="40" cy="28" r="14" fill="currentColor" />
        <path d="M8 72c0-17.673 14.327-28 32-28s32 10.327 32 28" fill="currentColor" />
      </svg>
    </div>
  );
};

// ── Research interest card ────────────────────────────────────────────────────

type ResearchCardInnerProps = {
  title: string;
  description: string;
  image?: string;
  hasLink: boolean;
};

const ResearchCardInner = ({ title, description, image, hasLink }: ResearchCardInnerProps) => (
  <div className="flex gap-5 items-start -mx-4 px-4 py-4 rounded-sm group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900/60 transition-colors duration-200">
    {image && (
      <div className="shrink-0 w-24 h-16 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={image}
          alt={title}
          width={96}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <div className="min-w-0">
      <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-1.5 flex items-center gap-1.5">
        {title}
        {hasLink && (
          <span className="text-zinc-400 dark:text-zinc-600 transition-transform duration-150 inline-block group-hover:translate-x-0.5">
            →
          </span>
        )}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

// ── Publication link badges ───────────────────────────────────────────────────

const PubLinks = ({ pdf }: { pdf?: string }) => {
  if (!pdf) return null;
  return (
    <a
      href={pdf}
      title="Open PDF"
      aria-label="Open PDF"
      className="inline-flex items-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
        aria-hidden
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <text x="12" y="16" textAnchor="middle" fontSize="5" fontWeight="600" fill="currentColor" stroke="none">
          PDF
        </text>
      </svg>
    </a>
  );
};

// ── Page ─────────────────────────────────────────────────────────────────────

const Home = () => {
  const latestNews = newsItems.slice(0, 3);
  const featuredPubs = publications.filter((p) => p.featured);
  const socialIcons = {
    linkedin: <IconLinkedIn />,
    scholar: <IconScholar />,
    cv: <IconCV />,
    github: <IconGitHub />,
  } as const;

  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* ── Hero ── */}
      <section className="flex flex-col justify-center pt-24 pb-10">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-4">
          {/* Text column */}
          <div className="flex-1 min-w-0">
            <h1
              className="hero-animate text-5xl sm:text-6xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 leading-none mb-5 text-center sm:text-left"
              style={{ animationDelay: '120ms' }}
            >
              Wenhan Lyu
            </h1>
            <div
              className="hero-animate mb-7 text-zinc-600 dark:text-zinc-300"
              style={{ animationDelay: '180ms' }}
            >
              <div className='flex flex-col items-center sm:items-start'>
                <div className="inline-grid grid-cols-3 gap-x-3 text-center text-xs tracking-wide w-24">
                  <span>lǚ</span>
                  <span>wén</span>
                  <span>hàn</span>
                </div>
                <div className="inline-grid grid-cols-3 gap-x-3 text-center text-xs mt-0.5 w-24">
                  <span>吕</span>
                  <span>文</span>
                  <span>瀚</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 mt-0.5 text-center sm:text-left">
                  <div className="inline-grid grid-cols-3 gap-x-3 text-xs shrink-0">
                    <span>Lyu,</span>
                    <span>Wen</span>
                    <span>Han</span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    <i>Lyu</i> is pronounced like <i>Lu</i> in French.
                  </p>
                </div>
              </div>
            </div>

            <p className="hero-animate text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 text-center sm:text-start" style={{ animationDelay: '240ms' }}>
              wlyu [AT] wm [DOT] edu
            </p>

            <p
              className="hero-animate text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8"
              style={{ animationDelay: '240ms' }}
            >
              {sharedBioSummary}
            </p>

            {/* Social icon links */}
            <div
              className="hero-animate flex items-center justify-center sm:justify-start gap-4"
              style={{ animationDelay: '360ms' }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={link.label}
                  className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <span className="sr-only">{link.label}</span>
                  {socialIcons[link.id]}
                </a>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div
            className="hero-animate self-center sm:self-start"
            style={{ animationDelay: '200ms' }}
          >
            <ProfilePhoto src={PROFILE_PHOTO || undefined} />
          </div>
        </div >
      </section >

      {/* ── Research Interests ── */}
      < FadeIn >
        <section className="py-8 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">
            Research Interests
          </h2>
          <div className="space-y-1">
            {researchItems.map((item, i) => (
              <FadeIn key={item.id} delay={i * 90}>
                {item.href ? (
                  <a href={item.href} className="block group">
                    <ResearchCardInner
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      hasLink
                    />
                  </a>
                ) : (
                  <div className="group">
                    <ResearchCardInner
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      hasLink={false}
                    />
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </section>
      </FadeIn >

      {/* ── Latest News ── */}
      < FadeIn >
        <section className="py-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Latest News
            </h2>
            <Link
              href="/news"
              className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              All news →
            </Link>
          </div>
          <ul className="space-y-8">
            {latestNews.map((item, i) => (
              <FadeIn key={item.id} as="li" delay={i * 80} className="flex gap-6">
                <time className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500 w-16 pt-0.5">
                  {formatDate(item.date)}
                </time>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {item.content}
                </p>
              </FadeIn>
            ))}
          </ul>
        </section>
      </FadeIn >

      {/* ── Selected Publications ── */}
      < FadeIn >
        <section className="py-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              Selected Publications
            </h2>
            <Link
              href="/publications"
              className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              All publications →
            </Link>
          </div>
          <ul className="space-y-8">
            {featuredPubs.map((pub, i) => (
              <FadeIn key={pub.title} as="li" delay={i * 80} className="flex gap-6">
                <span className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500 w-16 pt-0.5">
                  {pub.year}
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug mb-1">
                    {pub.doi ? (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-600"
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
                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">{pub.venue}</p>
                    <PubLinks pdf={pub.pdf} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </ul>
        </section>
      </FadeIn >
    </div >
  );
};

export default Home;

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CloseButton, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Publications', href: '/publications' },
];

const Nav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !isDark;
    root.classList.toggle('dark', nextIsDark);
    window.localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
    setIsDark(nextIsDark);
  };

  return (
    <Disclosure
      as="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity"
        >
          Wenhan Lyu
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${pathname === link.href
                  ? 'text-zinc-900 dark:text-zinc-100 font-medium'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-8 h-8 rounded-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-8 h-8 rounded-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <DisclosureButton className="flex flex-col gap-1.5 p-1 group">
            <span className="block w-5 h-px bg-zinc-900 dark:bg-zinc-100 transition-all group-data-[open]:rotate-45 group-data-[open]:translate-y-2" />
            <span className="block w-5 h-px bg-zinc-900 dark:bg-zinc-100 transition-all group-data-[open]:opacity-0" />
            <span className="block w-5 h-px bg-zinc-900 dark:bg-zinc-100 transition-all group-data-[open]:-rotate-45 group-data-[open]:-translate-y-2" />
          </DisclosureButton>
        </div>
      </div>

      {/* Mobile panel */}
      <DisclosurePanel className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <div className="mx-auto max-w-3xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <CloseButton
              key={link.href}
              as={Link}
              href={link.href}
              className={`text-sm transition-colors ${pathname === link.href
                ? 'text-zinc-900 dark:text-zinc-100 font-medium'
                : 'text-zinc-500 dark:text-zinc-400'
                }`}
            >
              {link.label}
            </CloseButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Nav;

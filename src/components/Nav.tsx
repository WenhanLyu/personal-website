'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Publications', href: '/publications' },
  { label: 'Contact', href: '/contact' },
];

const Nav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Disclosure
      as="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
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
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? 'text-zinc-900 dark:text-zinc-100 font-medium'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <DisclosureButton className="md:hidden flex flex-col gap-1.5 p-1 group">
          <span className="block w-5 h-px bg-zinc-900 dark:bg-zinc-100 transition-all group-data-[open]:rotate-45 group-data-[open]:translate-y-2" />
          <span className="block w-5 h-px bg-zinc-900 dark:bg-zinc-100 transition-all group-data-[open]:opacity-0" />
          <span className="block w-5 h-px bg-zinc-900 dark:bg-zinc-100 transition-all group-data-[open]:-rotate-45 group-data-[open]:-translate-y-2" />
        </DisclosureButton>
      </div>

      {/* Mobile panel */}
      <DisclosurePanel className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <div className="mx-auto max-w-3xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? 'text-zinc-900 dark:text-zinc-100 font-medium'
                  : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Nav;

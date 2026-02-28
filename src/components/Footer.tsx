const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-32">
      <div className="mx-auto max-w-3xl px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          © {year} Wenhan Lyu
        </p>
        <div className="flex gap-4">
          {[
            { label: 'GitHub', href: 'https://github.com/' },
            { label: 'LinkedIn', href: 'https://linkedin.com/' },
            { label: 'Google Scholar', href: 'https://scholar.google.com/' },
            { label: 'CV', href: '/cv.pdf' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

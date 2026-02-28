'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  as?: 'div' | 'li' | 'section' | 'article';
};

const FadeIn = ({ children, className = '', delay = 0, as: Tag = 'div' }: FadeInProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (el) el.setAttribute('data-visible', 'true');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`fade-in-section ${className}`}>
      {children}
    </Tag>
  );
};

export default FadeIn;

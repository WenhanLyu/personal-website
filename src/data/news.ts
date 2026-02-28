// The actual data and type now live in news.tsx (JSX required for rich content).
// This file re-exports everything so existing imports of '@/data/news' keep working.
export type { NewsItem } from './news.tsx';
export { newsItems } from './news.tsx';

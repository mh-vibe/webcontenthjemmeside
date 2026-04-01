import { MetadataRoute } from 'next';

const BASE_URL = 'https://webcontent.dk';
const LOCALES = ['da', 'en', 'sv', 'no'];

const PAGES = [
  '',
  '/pricing',
  '/about',
  '/creators',
  '/contact-support',
  '/ugc-pricing',
  '/locale-creators',
  '/best-creators',
  '/ugc-types',
  '/ai-center',
  '/broll-bank',
  '/blog',
  '/cases',
  '/cases/study/gogo',
  '/privacy-policy',
  '/terms-of-service',
  '/supportcenter',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    for (const locale of LOCALES) {
      const prefix = locale === 'da' ? '' : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }
  }

  return entries;
}

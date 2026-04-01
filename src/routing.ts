import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['da', 'en', 'sv', 'no'],
  defaultLocale: 'da',
  localePrefix: 'as-needed',
});

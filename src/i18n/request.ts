// request.ts
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from requestLocale (new approach)
  const locale = await requestLocale;

  // If locale is undefined or invalid, trigger a 404
  if (!locale || !routing.locales.includes(locale)) notFound();

  return {
    locale, // Explicitly return the locale
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

// Export a function to generate static params for all supported locales
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}
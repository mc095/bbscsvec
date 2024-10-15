import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();

  // Set the locale for the request


  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
    // You can add other configuration options here if needed
  };
});

// Export a function to generate static params for all supported locales
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}
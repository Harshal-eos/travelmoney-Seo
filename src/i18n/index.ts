import { notFound } from 'next/navigation';
import { locales, type Locale } from './request';

export function getMessages(locale: string) {
  try {
    return import(`./messages/${locale}.json`).then((module) => module.default);
  } catch {
    notFound();
  }
}

export function getLocaleFromParams(params: Promise<{ locale: string }>) {
  return params.then(({ locale }) => {
    if (!locales.includes(locale as Locale)) {
      notFound();
    }
    return locale;
  });
}

export { locales };
export type { Locale } from './request';

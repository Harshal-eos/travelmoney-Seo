export const locales = ['en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];

export function getLocale(request: Request): Locale {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
        const preferredLocale = acceptLanguage
            .split(',')
            .map(lang => lang.split(';')[0].trim().substring(0, 2))
            .find(lang => locales.includes(lang as Locale));

        if (preferredLocale) {
            return preferredLocale as Locale;
        }
    }

    return 'en'; // Default to English
}

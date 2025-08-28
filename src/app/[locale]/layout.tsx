import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { locales, getMessages } from '../../i18n';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const messages = await getMessages(locale);

    return {
        title: messages.seo.home.title,
        description: messages.seo.home.description,
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'en': '/en',
                'fr': '/fr',
                'es': '/es'
            }
        }
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages(locale);

    return (
        <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen flex flex-col">
                <Navbar lang={locale} />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer lang={locale} />
            </div>
        </NextIntlClientProvider>
    );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '../../i18n/request';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const messages = await getMessages({ locale });

    return {
        title: messages('seo.home.title') as string,
        description: messages('seo.home.description') as string,
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
    const messages = await getMessages({ locale });

    return (
        <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen flex flex-col">
                <Navbar locale={locale} />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer locale={locale} />
            </div>
        </NextIntlClientProvider>
    );
}

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages' });

  const localeAlts: Record<string, string> = {
    da: 'https://webcontent.dk',
    en: 'https://webcontent.dk/en',
    sv: 'https://webcontent.dk/sv',
    no: 'https://webcontent.dk/no',
  };

  return {
    metadataBase: new URL('https://webcontent.dk'),
    alternates: {
      canonical: localeAlts[locale] ?? 'https://webcontent.dk',
      languages: {
        'da': 'https://webcontent.dk',
        'en': 'https://webcontent.dk/en',
        'sv': 'https://webcontent.dk/sv',
        'no': 'https://webcontent.dk/no',
      },
    },
    openGraph: {
      images: [
        {
          url: 'https://framerusercontent.com/images/LU8wJ1EMGI8Xk2g3xoYZh0vOU.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'da' | 'en' | 'sv' | 'no')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="https://framerusercontent.com/images/97yoXH5GlTD2GO2oY40QLNZCTzw.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

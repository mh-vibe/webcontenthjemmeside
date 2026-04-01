import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import LogoStrip from '@/components/sections/LogoStrip';
import ScaleSection from '@/components/sections/ScaleSection';
import WhySection from '@/components/sections/WhySection';
import ProcessSection from '@/components/sections/ProcessSection';
import CreatorsSection from '@/components/sections/CreatorsSection';
import PricingSection from '@/components/sections/PricingSection';
import CasesSection from '@/components/sections/CasesSection';
import FAQSection from '@/components/sections/FAQSection';
import CTABanner from '@/components/sections/CTABanner';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  const titles: Record<string, string> = {
    da: 'Nemmeste alt-i-et UGC-værktøj | WebContent',
    en: 'The easiest all-in-one UGC tool | WebContent',
    sv: 'Det enklaste allt-i-ett UGC-verktyget | WebContent',
    no: 'Det enkleste alt-i-ett UGC-verktøyet | WebContent',
  };

  const descriptions: Record<string, string> = {
    da: 'WebContent er det nemmeste alt-i-et UGC-værktøj. Slip for lange chats og manuelle processer – opret kampagner, find creators og hent færdigt content hurtigt.',
    en: 'WebContent is the easiest all-in-one UGC tool. Skip long chats and manual processes – create campaigns, find creators, and get finished content fast.',
    sv: 'WebContent är det enklaste allt-i-ett UGC-verktyget. Hoppa över långa chattar och manuella processer – skapa kampanjer, hitta creators och få färdigt innehåll snabbt.',
    no: 'WebContent er det enkleste alt-i-ett UGC-verktøyet. Hopp over lange chatter og manuelle prosesser – opprett kampanjer, finn creators og få ferdig innhold raskt.',
  };

  return {
    title: titles[locale] ?? titles.da,
    description: descriptions[locale] ?? descriptions.da,
    openGraph: {
      title: titles[locale] ?? titles.da,
      description: descriptions[locale] ?? descriptions.da,
      url: locale === 'da' ? 'https://webcontent.dk' : `https://webcontent.dk/${locale}`,
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

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://webcontent.dk/#organization',
        name: 'WebContent ApS',
        url: 'https://webcontent.dk/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://framerusercontent.com/images/bnZyGSfKgvTIvmXu3YRSONXkPiE.png',
        },
        foundingDate: '2024-10-28',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Hovedvagtsstræde 2C',
          postalCode: '3000',
          addressLocality: 'Helsingør',
          addressCountry: 'DK',
        },
        vatID: 'DK45178927',
        sameAs: [
          'https://www.instagram.com/webcontent.dk/',
          'https://www.facebook.com/61555118136664/',
          'https://dk.linkedin.com/company/webcontentdk',
          'https://dk.trustpilot.com/review/webcontent.dk',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://webcontent.dk/#website',
        url: 'https://webcontent.dk/',
        name: 'WebContent – UGC Platform',
        inLanguage: locale,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection locale={locale} />
      <LogoStrip />
      <ScaleSection locale={locale} />
      <WhySection locale={locale} />
      <ProcessSection locale={locale} />
      <CreatorsSection locale={locale} />
      <PricingSection locale={locale} />
      <CasesSection locale={locale} />
      <FAQSection locale={locale} />
      <CTABanner locale={locale} />
    </>
  );
}

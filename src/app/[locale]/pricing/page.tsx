import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import PricingSection from '@/components/sections/PricingSection';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.pricing' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.pricing' });

  return (
    <>
      <PageHero
        headline={t('headline')}
        description={t('description')}
      />
      <PricingSection locale={locale} />
    </>
  );
}

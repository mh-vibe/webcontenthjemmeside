import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import PricingSection from '@/components/sections/PricingSection';
import styles from './page.module.css';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.ugcPricing' });
  return { title: t('title'), description: t('description') };
}

export default async function UgcPricingPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.ugcPricing' });

  const pricingItems = [
    { type: 'TikTok UGC', price: locale === 'da' ? '500 DKK' : '70 €', desc: '15-60 sec vertical video' },
    { type: 'Meta UGC', price: locale === 'da' ? '500 DKK' : '70 €', desc: 'Feed or Stories format' },
    { type: 'Testimonial', price: locale === 'da' ? '600 DKK' : '85 €', desc: 'Talking head review' },
    { type: 'Unboxing', price: locale === 'da' ? '700 DKK' : '100 €', desc: 'Product reveal video' },
    { type: 'Hook Pack (3x)', price: locale === 'da' ? '900 DKK' : '130 €', desc: '3 different opening hooks' },
    { type: 'Voice Over', price: locale === 'da' ? '300 DKK' : '45 €', desc: 'VO on existing footage' },
  ];

  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <h2 className={styles.subtitle}>{t('contentTypes')}</h2>
          <div className={styles.pricingGrid}>
            {pricingItems.map((item) => (
              <div key={item.type} className={styles.priceCard}>
                <h3 className={styles.priceType}>{item.type}</h3>
                <p className={styles.priceDesc}>{item.desc}</p>
                <div className={styles.priceAmount}>
                  <span className={styles.from}>{t('from')}</span>
                  <span className={styles.price}>{item.price}</span>
                  <span className={styles.perVideo}>{t('perVideo')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PricingSection locale={locale} />
    </>
  );
}

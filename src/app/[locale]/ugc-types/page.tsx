import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.ugcTypes' });
  return { title: t('title'), description: t('description') };
}
export default async function UgcTypesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.ugcTypes' });
  const tTypes = await getTranslations({ locale, namespace: 'ugcTypes' });

  const types = [
    { key: 'tiktokAds', icon: '🎵', desc: 'Short-form vertical video optimized for TikTok advertising.' },
    { key: 'metaAds', icon: '📘', desc: 'Videos and creatives for Facebook and Instagram ads.' },
    { key: 'testimonials', icon: '💬', desc: 'Real customer reviews and product endorsements.' },
    { key: 'hooks', icon: '🪝', desc: 'Attention-grabbing opening sequences for any ad format.' },
    { key: 'voiceOver', icon: '🎙️', desc: 'Professional voice-over on your existing footage.' },
    { key: 'lifereal', icon: '📸', desc: 'Day-in-the-life and authentic lifestyle content.' },
    { key: 'readyToUse', icon: '✅', desc: 'Fully edited, export-ready creative assets.' },
    { key: 'rawMaterial', icon: '🎬', desc: 'Unedited footage for your own editing team.' },
  ] as const;

  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.grid}>
            {types.map((type) => (
              <div key={type.key} className={styles.card}>
                <span className={styles.icon}>{type.icon}</span>
                <h3 className={styles.name}>{tTypes(type.key)}</h3>
                <p className={styles.desc}>{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

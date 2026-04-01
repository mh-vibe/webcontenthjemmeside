import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.aiCenter' });
  return { title: t('title'), description: t('description') };
}
export default async function AiCenterPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.aiCenter' });
  const features = [
    { icon: '🧠', title: 'AI Creative Strategist', desc: 'Generate high-converting hooks and creative concepts instantly with AI trained on 10,000+ UGC ads.' },
    { icon: '🎙️', title: 'AI Voice Generator', desc: 'Create realistic voice-overs in seconds. Multiple voices, languages, and tones available.' },
    { icon: '📊', title: 'Performance Insights', desc: 'AI-powered recommendations based on what is working across our entire platform.' },
    { icon: '✍️', title: 'Script Writer', desc: 'Auto-generate full ad scripts from just a product URL or description.' },
  ];
  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.grid}>
            {features.map((f) => (
              <div key={f.title} className={styles.card}>
                <span className={styles.icon}>{f.icon}</span>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.desc}>{f.desc}</p>
              </div>
            ))}
          </div>
          <a href="https://app.webcontent.dk/signup" className={styles.cta}>Try AI Center free</a>
        </div>
      </section>
    </>
  );
}

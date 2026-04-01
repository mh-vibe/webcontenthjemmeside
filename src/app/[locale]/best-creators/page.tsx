import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.bestCreators' });
  return { title: t('title'), description: t('description') };
}
export default async function BestCreatorsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.bestCreators' });
  const features = [
    { icon: '🎯', title: 'Quality tested', desc: 'Every creator on our platform is quality tested before being accepted.' },
    { icon: '⭐', title: 'Top rated', desc: 'We only keep creators with consistently high ratings and delivery.' },
    { icon: '🚀', title: 'Fast delivery', desc: 'Our creators deliver on time, every time.' },
    { icon: '🤝', title: 'No chats needed', desc: 'Everything is handled on the platform – no long back-and-forth.' },
  ];
  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.icon}>{f.icon}</span>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.desc}>{f.desc}</p>
              </div>
            ))}
          </div>
          <a href="https://app.webcontent.dk/creators" className={styles.cta}>Explore creators</a>
        </div>
      </section>
    </>
  );
}

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.creators' });
  return { title: t('title'), description: t('description') };
}

export default async function CreatorsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.creators' });

  const benefits = [
    { title: t('benefit1Title'), desc: t('benefit1Desc'), icon: '🗓️' },
    { title: t('benefit2Title'), desc: t('benefit2Desc'), icon: '💰' },
    { title: t('benefit3Title'), desc: t('benefit3Desc'), icon: '🚀' },
  ];

  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.benefits}>
            {benefits.map((b) => (
              <div key={b.title} className={styles.benefit}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.ctas}>
            <a href="https://app.webcontent.dk/creator-signup" className={styles.primaryCta}>{t('ctaApply')}</a>
            <a href="https://app.webcontent.dk/creators" className={styles.secondaryCta}>{t('ctaLearnMore')}</a>
          </div>
        </div>
      </section>
    </>
  );
}

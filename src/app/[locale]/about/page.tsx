import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.about' });
  return { title: t('title'), description: t('description') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.about' });

  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.missionBlock}>
            <h2 className={styles.sectionTitle}>{t('mission')}</h2>
            <p className={styles.missionText}>{t('missionText')}</p>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>{t('founded')}</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>{t('vatLabel')} {t('vat')}</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>{t('address')}</span>
            </div>
          </div>
          <div className={styles.teamSection}>
            <h2 className={styles.sectionTitle}>{t('teamHeadline')}</h2>
            <div className={styles.teamGrid}>
              {['Sebastian', 'Mathias', 'Daniel'].map((name) => (
                <div key={name} className={styles.teamCard}>
                  <div className={styles.teamAvatar}>{name[0]}</div>
                  <div className={styles.teamName}>{name}</div>
                  <div className={styles.teamRole}>WebContent ApS</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

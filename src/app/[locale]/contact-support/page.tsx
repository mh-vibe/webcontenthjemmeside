import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.contact' });
  return { title: t('title'), description: t('description') };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.contact' });

  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <span className={styles.contactIcon}>📧</span>
              <h3 className={styles.contactLabel}>{t('emailLabel')}</h3>
              <a href={`mailto:${t('email')}`} className={styles.contactValue}>{t('email')}</a>
            </div>
            <div className={styles.contactCard}>
              <span className={styles.contactIcon}>📞</span>
              <h3 className={styles.contactLabel}>{t('phoneLabel')}</h3>
              <a href={`tel:${t('phone')}`} className={styles.contactValue}>{t('phone')}</a>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <a href="https://calendly.com/webcontent" className={styles.primaryCta}>{t('ctaBook')}</a>
            <a href={`mailto:${t('email')}`} className={styles.secondaryCta}>{t('ctaEmail')}</a>
          </div>
          <div className={styles.supportSection}>
            <h2 className={styles.supportTitle}>{t('supportHeadline')}</h2>
            <p className={styles.supportDesc}>{t('supportDesc')}</p>
            <a href={localePath('/supportcenter')} className={styles.secondaryCta}>{t('supportHeadline')}</a>
          </div>
        </div>
      </section>
    </>
  );
}

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './HeroSection.module.css';

type Props = { locale: string };

export default function HeroSection({ locale }: Props) {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.headline}>{t('headline')}</h1>

        <p className={styles.subheadline}>{t('subheadline')}</p>

        <div className={styles.ctas}>
          <a href="https://app.webcontent.dk/signup" className={styles.primaryCta}>
            {t('cta1')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </a>
          <a href="https://calendly.com/webcontent" className={styles.secondaryCta}>
            <Image
              src="https://framerusercontent.com/images/g7S8TLu6JhPDMIomRoLcXtffCA.png"
              alt="Seb"
              width={28}
              height={28}
              className={styles.ctaAvatar}
            />
            {t('cta2')}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <svg className={styles.check} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 4.5" stroke="#f3584a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{t('stat1')}</span>
          </div>
          <div className={styles.stat}>
            <svg className={styles.check} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 4.5" stroke="#f3584a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{t('stat2')}</span>
          </div>
          <div className={styles.stat}>
            <svg className={styles.check} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 4.5" stroke="#f3584a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{t('stat3')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

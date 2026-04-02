import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './HeroSection.module.css';

type Props = { locale: string };

export default function HeroSection({ locale }: Props) {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {t('badge')}
          </div>

          <h1 className={styles.headline}>
            {t('headline')}
          </h1>

          <p className={styles.subheadline}>
            {t('subheadline')}
          </p>

          <div className={styles.ctas}>
            <a href="https://app.webcontent.dk/signup" className={styles.primaryCta}>
              {t('cta1')}
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statIcon}>⭐</span>
              <span className={styles.statText}>{t('stat1')}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Image
                src="https://framerusercontent.com/images/TWAnC7GX1Wmv3D2Kah1ir7RfxWA.png"
                alt="Trustpilot"
                width={80}
                height={20}
                style={{ objectFit: 'contain' }}
              />
              <span className={styles.statText}>{t('stat2')}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statText}>{t('stat3')}</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.mockupGlow} />
          <Image
            src="https://framerusercontent.com/images/PsnafjgqXUjz4UlQBa0be8waY.png"
            alt="WebContent Platform"
            width={620}
            height={440}
            className={styles.appMockup}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}

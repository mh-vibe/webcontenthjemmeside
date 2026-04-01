import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './ScaleSection.module.css';

type Props = { locale: string };

export default function ScaleSection({ locale }: Props) {
  const t = useTranslations('scaleSection');

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.headline}>{t('headline')}</h2>
          <p className={styles.subheadline}>{t('subheadline')}</p>
          <div className={styles.ctas}>
            <a href="https://app.webcontent.dk/signup" className={styles.primaryCta}>
              {t('cta1')}
            </a>
            <a href="https://calendly.com/webcontent" className={styles.secondaryCta}>
              {t('cta2')}
            </a>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📈</div>
            <h3 className={styles.featureTitle}>{t('feature1Title')}</h3>
            <p className={styles.featureSub}>{t('feature1Sub')}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤝</div>
            <h3 className={styles.featureTitle}>{t('feature2Title')}</h3>
            <p className={styles.featureDesc}>{t('feature2Desc')}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3 className={styles.featureTitle}>{t('feature3Title')}</h3>
            <p className={styles.featureDesc}>{t('feature3Desc')}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>{t('feature4Title')}</h3>
            <p className={styles.featureDesc}>{t('feature4Desc')}</p>
          </div>
        </div>

        <div className={styles.appVisual}>
          <Image
            src="https://framerusercontent.com/images/PsnafjgqXUjz4UlQBa0be8waY.png"
            alt="WebContent App"
            width={900}
            height={500}
            style={{ objectFit: 'contain', borderRadius: 16 }}
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}

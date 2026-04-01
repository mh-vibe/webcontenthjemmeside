import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './HeroSection.module.css';

type Props = { locale: string };

export default function HeroSection({ locale }: Props) {
  const t = useTranslations('hero');
  const nav = useTranslations('nav');

  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

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
            <a href="https://calendly.com/webcontent" className={styles.secondaryCta}>
              {t('cta2')}
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
          <div className={styles.phonesWrapper}>
            <div className={styles.phoneLeft}>
              <Image
                src="https://framerusercontent.com/images/ETizEDkRfG0fBrzzk8gn14rdc.png"
                alt="Creator UGC"
                width={200}
                height={360}
                style={{ objectFit: 'cover', borderRadius: 20 }}
              />
            </div>
            <div className={styles.phoneCenter}>
              <Image
                src="https://framerusercontent.com/images/5ABNZSu7aUea84ijpFboyPqA0.png"
                alt="Creator UGC"
                width={220}
                height={395}
                style={{ objectFit: 'cover', borderRadius: 20 }}
              />
            </div>
            <div className={styles.phoneRight}>
              <Image
                src="https://framerusercontent.com/images/G1xbbBEjrQVjTbIDe3775SR0iSs.png"
                alt="Creator UGC"
                width={200}
                height={360}
                style={{ objectFit: 'cover', borderRadius: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

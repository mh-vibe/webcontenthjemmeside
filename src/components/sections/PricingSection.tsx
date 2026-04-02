import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './PricingSection.module.css';

type Props = { locale: string };

const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: '#d0d5dd' }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CheckIcon = ({ highlight }: { highlight?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="8.5" stroke={highlight ? '#f3584a' : '#f3584a'} strokeOpacity="0.3" fill={highlight ? 'rgba(243,88,74,0.08)' : 'rgba(243,88,74,0.08)'}/>
    <path d="M5.5 9l2.5 2.5L12.5 6" stroke="#f3584a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PricingSection({ locale }: Props) {
  const t = useTranslations('pricing');

  const soloFeatures = [
    t('soloFeature3'),
    t('soloFeature4'),
  ];

  const scaleFeatures = [
    t('scaleFeature2'),
    t('scaleFeature3'),
    t('scaleFeature4'),
    t('scaleFeature5'),
    t('scaleFeature6'),
    t('scaleFeature7'),
    t('scaleFeature8'),
    t('scaleFeature9'),
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.headline}>{t('badge')}</h2>

        <div className={styles.cards}>
          {/* SOLO */}
          <div className={styles.card}>
            <div className={styles.planName}>{t('soloName')}</div>
            <div className={styles.priceRow}>
              <span className={styles.priceAmount}>{t('soloPrice')}</span>
              <span className={styles.priceLabel}>{t('soloPriceLabel')}</span>
            </div>
            <p className={styles.priceSub}>{t('soloFeature1')}</p>

            <div className={styles.planInput}>{t('soloFeature2')}</div>

            <ul className={styles.features}>
              {soloFeatures.map((f, i) => (
                <li key={i} className={styles.feature}>
                  <CheckIcon />
                  <span className={styles.featureText}>{f}</span>
                  <InfoIcon />
                </li>
              ))}
            </ul>

            <a href="https://app.webcontent.dk/signup" className={styles.soloBtn}>
              {t('soloCta')} →
            </a>

            <div className={styles.usedBy}>
              <span className={styles.usedByLabel}>{t('usedBy')}</span>
              <Image
                src="https://framerusercontent.com/images/zRyz2DHiGq2zuWfxVnfXlvReuU.png"
                alt="Brands using WebContent"
                width={200}
                height={28}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* SCALE */}
          <div className={`${styles.card} ${styles.cardHighlight}`}>
            <div className={styles.popularBadge}>{t('scaleFor')}</div>
            <div className={styles.planName}>{t('scaleName')}</div>
            <div className={styles.priceRow}>
              <span className={styles.priceAmount}>{t('scalePrice')}</span>
              <span className={styles.priceLabel}>{t('scalePriceLabel')}</span>
            </div>
            <p className={styles.priceSub}>{t('scaleNote')}</p>

            <div className={styles.planDropdown}>
              <span>{t('scaleFeature1')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>

            <ul className={styles.features}>
              {scaleFeatures.map((f, i) => (
                <li key={i} className={styles.feature}>
                  <CheckIcon highlight />
                  <span className={styles.featureText}>{f}</span>
                  <InfoIcon />
                </li>
              ))}
            </ul>

            <a href="https://app.webcontent.dk/signup?plan=scale" className={styles.scaleBtn}>
              {t('scaleCta')} →
            </a>

            <div className={styles.usedBy}>
              <span className={styles.usedByLabel}>{t('usedBy')}</span>
              <Image
                src="https://framerusercontent.com/images/zRyz2DHiGq2zuWfxVnfXlvReuU.png"
                alt="Brands using WebContent"
                width={200}
                height={28}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

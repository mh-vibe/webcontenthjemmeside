import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './PricingSection.module.css';

type Props = { locale: string };

export default function PricingSection({ locale }: Props) {
  const t = useTranslations('pricing');

  const scaleFeatures = [
    t('scaleFeature1'),
    t('scaleFeature2'),
    t('scaleFeature3'),
    t('scaleFeature4'),
    t('scaleFeature5'),
    t('scaleFeature6'),
    t('scaleFeature7'),
    t('scaleFeature8'),
    t('scaleFeature9'),
  ];

  const soloFeatures = [
    t('soloFeature1'),
    t('soloFeature2'),
    t('soloFeature3'),
    t('soloFeature4'),
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{t('badge')}</div>

        <div className={styles.cards}>
          {/* SOLO */}
          <div className={styles.card}>
            <div className={styles.planName}>{t('soloName')}</div>
            <div className={styles.price}>
              <span className={styles.priceAmount}>{t('soloPrice')}</span>
              <span className={styles.priceLabel}>{t('soloPriceLabel')}</span>
            </div>
            <p className={styles.priceSub}>Betal pr. video</p>

            <ul className={styles.features}>
              {soloFeatures.map((f, i) => (
                <li key={i} className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="https://app.webcontent.dk/signup" className={styles.soloBtn}>
              {t('soloCta')}
            </a>

            <div className={styles.usedBy}>
              <span className={styles.usedByLabel}>{t('usedBy')}</span>
              <div className={styles.brandLogos}>
                <Image
                  src="https://framerusercontent.com/images/zRyz2DHiGq2zuWfxVnfXlvReuU.png"
                  alt="Used by brands"
                  width={200}
                  height={28}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* SCALE */}
          <div className={`${styles.card} ${styles.cardHighlight}`}>
            <div className={styles.popularBadge}>Most popular</div>
            <div className={styles.planNameHighlight}>{t('scaleName')}</div>
            <div className={styles.price}>
              <span className={styles.priceAmount}>{t('scalePrice')}</span>
              <span className={styles.priceLabel}>{t('scalePriceLabel')}</span>
              <span className={styles.priceOld}>1.495</span>
            </div>
            <p className={styles.scaleNote}>{t('scaleNote')}</p>
            <p className={styles.scaleFor}>{t('scaleFor')}</p>

            <ul className={styles.features}>
              {scaleFeatures.map((f, i) => (
                <li key={i} className={styles.feature}>
                  <span className={styles.checkIconHighlight}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="https://app.webcontent.dk/signup?plan=scale" className={styles.scaleBtn}>
              {t('scaleCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

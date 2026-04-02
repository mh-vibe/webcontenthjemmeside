import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WhySection.module.css';

type Props = { locale: string };

export default function WhySection({ locale }: Props) {
  const t = useTranslations('whySection');
  const ugcTypes = useTranslations('ugcTypes');

  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  const ugcTypeList = [
    ugcTypes('tiktokAds'),
    ugcTypes('lifereal'),
    ugcTypes('voiceOver'),
    ugcTypes('hooks'),
    ugcTypes('readyToUse'),
    ugcTypes('rawMaterial'),
    ugcTypes('testimonials'),
    ugcTypes('metaAds'),
  ];

  const CREATOR_VIDEOS = [
    'https://framerusercontent.com/assets/lpIbySSpuGw71yTxJw85XWyzs.mp4',
    'https://framerusercontent.com/assets/CBtCetxbm4nF2c0mvnxydilFtcw.mp4',
    'https://framerusercontent.com/assets/b9IVCEkP8tjX4mQVD34UO6NSlI8.mp4',
    'https://framerusercontent.com/assets/U6hEq2JIBK46WsO2jarimxTMis.mp4',
    'https://framerusercontent.com/assets/6ZYcSgtYUNJDs8fpSJE7gMM6bM.mp4',
    'https://framerusercontent.com/assets/EXEZiLY8ElISgkGICKGinXwHWT8.mp4',
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{t('badge')}</div>
        <h2 className={styles.headline}>{t('headline')}</h2>

        <div className={styles.grid}>
          {/* Card 1 - UGC Pricing - dark card col 1, row 1 */}
          <div className={`${styles.card} ${styles.cardDark}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature1Title')}</h3>
              <p className={styles.cardDesc}>{t('feature1Desc')}</p>
              <Link href={localePath('/ugc-pricing')} className={styles.cardLinkDark}>
                {t('feature1Link')} →
              </Link>
            </div>
            <div className={styles.cardVisualPrice}>
              <div className={styles.priceDisplay}>
                <span className={styles.priceFrom}>Fra</span>
                <span className={styles.priceAmount}>500</span>
                <span className={styles.priceCurrency}>DKK</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Local Creators - col 2, rows 1-2 TALL */}
          <div className={`${styles.card} ${styles.cardTall}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature2Title')}</h3>
              <Link href={localePath('/locale-creators')} className={styles.cardLink}>
                {t('feature2Link')} →
              </Link>
            </div>
            <div className={styles.creatorGrid}>
              {CREATOR_VIDEOS.slice(0, 6).map((src, i) => (
                <div key={i} className={styles.creatorThumb}>
                  <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 - Best Creators - col 1, row 2 */}
          <div className={`${styles.card} ${styles.cardNormal3}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature3Title')}</h3>
              <p className={styles.cardDesc}>{t('feature3Desc')}</p>
              <p className={styles.cardSub}>{t('feature3Sub')}</p>
              <Link href={localePath('/best-creators')} className={styles.cardLink}>
                {t('feature3Link')} →
              </Link>
            </div>
          </div>

          {/* Card 4 - UGC Types - col 1-2, row 3 WIDE */}
          <div className={`${styles.card} ${styles.cardWide4}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature4Title')}</h3>
              <Link href={localePath('/ugc-types')} className={styles.cardLink}>
                {t('feature4Link')} →
              </Link>
            </div>
            <div className={styles.tagList}>
              {ugcTypeList.map((type, i) => (
                <span key={i} className={styles.tag}>{type}</span>
              ))}
            </div>
          </div>

          {/* Card 5 - AI Center - col 1, row 4 */}
          <div className={`${styles.card} ${styles.card5}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature5Title')}</h3>
              <p className={styles.cardDesc}>{t('feature5Desc')}</p>
              <Link href={localePath('/ai-center')} className={styles.cardLink}>
                {t('feature5Link')} →
              </Link>
            </div>
            <div className={styles.aiBadge}>
              <span className={styles.aiLabel}>AI</span>
            </div>
          </div>

          {/* Card 6 - B-roll Bank - col 2, row 4 */}
          <div className={`${styles.card} ${styles.card6}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature6Title')}</h3>
              <Link href={localePath('/broll-bank')} className={styles.cardLink}>
                {t('feature6Link')} →
              </Link>
            </div>
            <div className={styles.brollVisual}>
              <Image
                src="https://framerusercontent.com/images/sLhpHeZwUNj1olTOLhgwngbb4.png"
                alt="B-roll bank"
                width={300}
                height={120}
                style={{ objectFit: 'cover', borderRadius: 8 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

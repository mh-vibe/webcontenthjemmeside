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

  const CREATOR_IMAGES = [
    'https://framerusercontent.com/images/0f6elDFlPOra037g6PexamN7rk.png',
    'https://framerusercontent.com/images/39TxLXlTK7Jh6cfXqcAkgGrlUw.png',
    'https://framerusercontent.com/images/6ByQwLiPu4SIB7wRNX01axYl88.png',
    'https://framerusercontent.com/images/8t16C3ZN04rpfQGNyTnUJw7SH6E.png',
    'https://framerusercontent.com/images/H8I02191s0XUI2x9s8anculpLE.png',
    'https://framerusercontent.com/images/WOoKLBWbV31qnJRV7IqWWbeG98.png',
    'https://framerusercontent.com/images/aU4CoI1USIB7iENDPyoqHnoZHg.png',
    'https://framerusercontent.com/images/uF5M8NSKbOsdz7gYGDdf7FqnZM.png',
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{t('badge')}</div>
        <h2 className={styles.headline}>{t('headline')}</h2>

        <div className={styles.grid}>
          {/* Card 1 - UGC Pricing */}
          <div className={`${styles.card} ${styles.cardWide}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature1Title')}</h3>
              <p className={styles.cardDesc}>{t('feature1Desc')}</p>
              <Link href={localePath('/ugc-pricing')} className={styles.cardLink}>
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

          {/* Card 2 - Local Creators */}
          <div className={`${styles.card} ${styles.cardTall}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature2Title')}</h3>
              <Link href={localePath('/locale-creators')} className={styles.cardLink}>
                {t('feature2Link')} →
              </Link>
            </div>
            <div className={styles.creatorGrid}>
              {CREATOR_IMAGES.slice(0, 6).map((src, i) => (
                <div key={i} className={styles.creatorThumb}>
                  <Image src={src} alt="Creator" width={76} height={100} style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 - Best Creators */}
          <div className={`${styles.card} ${styles.cardNormal}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('feature3Title')}</h3>
              <p className={styles.cardDesc}>{t('feature3Desc')}</p>
              <p className={styles.cardSub}>{t('feature3Sub')}</p>
              <Link href={localePath('/best-creators')} className={styles.cardLink}>
                {t('feature3Link')} →
              </Link>
            </div>
          </div>

          {/* Card 4 - UGC Types */}
          <div className={`${styles.card} ${styles.cardNormal}`}>
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

          {/* Card 5 - AI Center */}
          <div className={`${styles.card} ${styles.cardWide}`}>
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

          {/* Card 6 - B-roll Bank */}
          <div className={`${styles.card} ${styles.cardNormal}`}>
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

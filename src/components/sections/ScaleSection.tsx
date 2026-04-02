import { useTranslations } from 'next-intl';
import styles from './ScaleSection.module.css';
/* eslint-disable @next/next/no-img-element */

type Props = { locale: string };

export default function ScaleSection({ locale }: Props) {
  const t = useTranslations('scaleSection');

  const cards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      ),
      title: t('feature2Title'),
      desc: t('feature2Desc'),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: t('feature3Title'),
      desc: t('feature3Desc'),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="15" height="10" rx="2" />
          <polygon points="21 7 17 10 17 14 21 17 21 7" />
        </svg>
      ),
      title: t('feature4Title'),
      desc: t('feature4Desc'),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>{t('feature1Title')}</p>
        <h2 className={styles.headline}>{t('feature1Sub')}</h2>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.experts}>
          <span className={styles.expertsLabel}>{t('expertsIn')}</span>
          <img src="https://framerusercontent.com/images/jEKJk1RKf1FbpSA1OxPEl0xFg.png" alt="Meta" height={24} style={{ width: 'auto' }} />
          <img src="https://framerusercontent.com/images/TWAnC7GX1Wmv3D2Kah1ir7RfxWA.png" alt="TikTok" height={24} style={{ width: 'auto' }} />
        </div>
      </div>
    </section>
  );
}

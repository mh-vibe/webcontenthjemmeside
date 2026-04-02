import { useTranslations } from 'next-intl';
import styles from './ScaleSection.module.css';

type Props = { locale: string };

export default function ScaleSection({ locale }: Props) {
  const t = useTranslations('scaleSection');

  const cards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      ),
      title: t('feature1Title'),
      desc: t('feature1Sub'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M7 3v6" />
          <path d="M17 3v6" />
          <path d="M8 14h2v4H8z" />
          <path d="M14 12h2v6h-2z" />
        </svg>
      ),
      title: t('feature2Title'),
      desc: t('feature2Desc'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
          <path d="M3 14h18" />
          <path d="M3 18h18" />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <path d="M10 6l3 3 5-5" />
        </svg>
      ),
      title: t('feature3Title'),
      desc: t('feature3Desc'),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.headline}>{t('headline')}</h2>
        </div>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.platformBadges}>
                <span className={styles.platformBadge}>Meta</span>
                <span className={styles.platformBadge}>TikTok</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

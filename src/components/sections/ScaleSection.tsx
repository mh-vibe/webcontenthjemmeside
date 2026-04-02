import { useTranslations } from 'next-intl';
import styles from './ScaleSection.module.css';

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
          {/* Meta logo */}
          <svg height="20" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Meta">
            <path d="M6.8 20c0-4.5 2.3-8.6 5.8-10.8C8.1 11 5 15.1 5 20s3.1 9 7.6 10.8C8.9 28.5 6.8 24.3 6.8 20z" fill="#0082FB"/>
            <path d="M20 8c-2.2 0-4.2.7-5.8 1.9 1.6-1.2 3.6-1.9 5.8-1.9s4.2.7 5.8 1.9C24.2 8.7 22.2 8 20 8z" fill="#0082FB"/>
            <path d="M33.2 20c0 4.3-2.1 8.5-5.6 10.8C32 28.9 35 24.9 35 20s-3-8.9-7.4-10.8C31.1 11.5 33.2 15.7 33.2 20z" fill="#0082FB"/>
            <path d="M27.6 9.2C25.9 8 23.9 7.2 21.7 7.1l-.2-.1H20c-2.2 0-4.2.7-5.8 1.9-3.5 2.2-5.8 6.3-5.8 10.8 0 2.9.8 5.5 2.1 7.6 1.4 2.1 3.4 3.5 5.5 3.5 1.9 0 3.5-.8 4.9-2.5.5-.6 1-1.3 1.5-2.2.5.9 1 1.6 1.5 2.2 1.4 1.7 3 2.5 4.9 2.5 2.1 0 4.1-1.4 5.5-3.5 1.3-2.1 2.1-4.7 2.1-7.6 0-4.3-2.1-8.5-5.7-10.8h-.1z" fill="#0082FB"/>
            <text x="42" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#1c1e21">Meta</text>
          </svg>
          {/* TikTok logo */}
          <svg height="20" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TikTok">
            <path d="M14.4 0h4.8c.3 3.5 2.7 6.1 6.3 6.4v4.7c-2.2-.1-4.2-.8-5.8-2v9c0 4.5-3.7 8.2-8.2 8.2C7 26.3 3.3 22.6 3.3 18.1S7 9.9 11.5 9.9c.4 0 .8 0 1.2.1v4.8c-.4-.1-.8-.1-1.2-.1-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V0h-.7z" fill="#010101"/>
            <text x="32" y="22" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="18" fill="#010101">TikTok</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

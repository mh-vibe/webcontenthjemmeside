import { useTranslations } from 'next-intl';
import styles from './ProcessSection.module.css';

type Props = { locale: string };

export default function ProcessSection({ locale }: Props) {
  const t = useTranslations('process');

  const steps = [
    {
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
    },
    {
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
        </svg>
      ),
    },
    {
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{t('badge')}</div>
        <h2 className={styles.headline}>{t('headline')}</h2>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

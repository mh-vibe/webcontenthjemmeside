import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './ProcessSection.module.css';

type Props = { locale: string };

export default function ProcessSection({ locale }: Props) {
  const t = useTranslations('process');

  const steps = [
    {
      number: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: '📋',
    },
    {
      number: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: '🤖',
    },
    {
      number: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: '🎬',
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
              <div className={styles.stepNumber}>{step.number}</div>
              {i < steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.appMock}>
          <Image
            src="https://framerusercontent.com/images/g7S8TLu6JhPDMIomRoLcXtffCA.png"
            alt="WebContent Platform"
            width={684}
            height={660}
            style={{ objectFit: 'contain', borderRadius: 16 }}
          />
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CasesSection.module.css';

type Props = { locale: string };

export default function CasesSection({ locale }: Props) {
  const t = useTranslations('cases');

  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{t('badge')}</div>
        <h2 className={styles.headline}>{t('headline')}</h2>

        <div className={styles.testimonial}>
          <blockquote className={styles.quote}>
            "{t('testimonial')}"
          </blockquote>
          <cite className={styles.author}>{t('testimonialAuthor')}</cite>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{t('stat1')}</span>
            <span className={styles.statLabel}>{t('stat1Label')}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{t('stat2')}</span>
            <span className={styles.statLabel}>{t('stat2Label')}</span>
          </div>
        </div>

        <div className={styles.caseCards}>
          <Link href={localePath('/cases/study/gogo')} className={styles.caseCard}>
            <div className={styles.caseThumb}>
              <Image
                src="https://framerusercontent.com/images/vVtSR2m66uPE4pq1qR2MjGjrZQ.png"
                alt="Gogoevent"
                width={350}
                height={200}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.caseInfo}>
              <span className={styles.caseName}>{t('case1')}</span>
              <span className={styles.caseArrow}>→</span>
            </div>
          </Link>

          <div className={`${styles.caseCard} ${styles.caseCardDisabled}`}>
            <div className={styles.caseThumb} style={{ background: 'var(--color-bg-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 160 }}>
                <span style={{ fontSize: 32 }}>📱</span>
              </div>
            </div>
            <div className={styles.caseInfo}>
              <span className={styles.caseName}>{t('case2')}</span>
            </div>
          </div>

          <div className={`${styles.caseCard} ${styles.caseCardDisabled}`}>
            <div className={styles.caseThumb} style={{ background: 'var(--color-bg-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 160 }}>
                <span style={{ fontSize: 32 }}>⏳</span>
              </div>
            </div>
            <div className={styles.caseInfo}>
              <span className={styles.caseName}>{t('case3')}</span>
            </div>
          </div>
        </div>

        <Link href={localePath('/cases/study/gogo')} className={styles.readCase}>
          {t('readCase')} →
        </Link>
      </div>
    </section>
  );
}

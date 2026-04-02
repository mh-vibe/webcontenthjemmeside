'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CasesSection.module.css';

type Props = { locale: string };

export default function CasesSection({ locale }: Props) {
  const t = useTranslations('cases');
  const [activeTab, setActiveTab] = useState(0);

  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  const tabs = [
    t('case1'),
    t('case2'),
    t('case3'),
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{t('badge')}</div>
        <h2 className={styles.headline}>{t('headline')}</h2>

        <div className={styles.tabRow}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`${styles.tabBtn} ${activeTab === i ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.caseInner}>
          <div className={styles.image}>
            <Image
              src="https://framerusercontent.com/images/vVtSR2m66uPE4pq1qR2MjGjrZQ.png"
              alt={tabs[activeTab]}
              width={280}
              height={380}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          <div className={styles.content}>
            <blockquote className={styles.quote}>
              &ldquo;{t('testimonial')}&rdquo;
            </blockquote>
            <cite className={styles.author}>{t('testimonialAuthor')}</cite>

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
          </div>
        </div>

        <Link href={localePath('/cases/study/gogo')} className={styles.readCase}>
          {t('readCase')} →
        </Link>
      </div>
    </section>
  );
}

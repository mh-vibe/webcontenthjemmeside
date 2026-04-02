'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './CreatorsSection.module.css';

type Props = { locale: string };

const CREATOR_VIDEOS = [
  'https://framerusercontent.com/assets/5lAz5wsxYZoyaw9auQXx6k.mp4',
  'https://framerusercontent.com/assets/SzlznJPy1ky6BFARbncTixonnd8.mp4',
  'https://framerusercontent.com/assets/DTUz6BGYLH76Rd17DnMbChwnZ94.mp4',
  'https://framerusercontent.com/assets/M6RCEfS3vMoV6KaaYLDqpaJzQ4.mp4',
  'https://framerusercontent.com/assets/vaTHykBUnHbckpPG95wNfUqeg.mp4',
  'https://framerusercontent.com/assets/qctTi38kJVn3Ku3GPJwQMiH6EQ.mp4',
  'https://framerusercontent.com/assets/ARd3GKIdEl7hHE8OEGtP06g8Ew.mp4',
  'https://framerusercontent.com/assets/57zchJHnVa7aiZIK9jsuhpTW9iA.mp4',
];

const RATINGS = [4.9, 4.8, 5.0, 4.7, 4.9, 4.8, 4.9, 5.0];

const CATEGORIES = ['Alt', 'Skønhed/Tøj', 'Mad & Fitness', 'Skincare & Compact', 'Tøj & Skødyr'];

export default function CreatorsSection({ locale }: Props) {
  const t = useTranslations('creators');
  const [activeCategory, setActiveCategory] = useState('Alt');

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{t('badge')}</div>
        <h2 className={styles.headline}>{t('headline')}</h2>

        <div className={styles.tabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.creatorGrid}>
          {CREATOR_VIDEOS.map((src, i) => (
            <div key={i} className={styles.creatorCard}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.creatorVideo}
              >
                <source src={src} type="video/mp4" />
              </video>
              <div className={styles.rating}>⭐ {RATINGS[i].toFixed(1)}</div>
            </div>
          ))}
        </div>

        <a href="https://app.webcontent.dk/creators" className={styles.cta}>
          {t('exploreBtn')}
        </a>
      </div>
    </section>
  );
}

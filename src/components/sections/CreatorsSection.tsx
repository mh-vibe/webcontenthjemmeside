'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './CreatorsSection.module.css';

type Props = { locale: string };

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

const CATEGORIES = [
  'Alt',
  'Skønhed/Tøj',
  'Mad & Fitness',
  'Skincare & Compact',
  'Tøj & Skødyr',
];

const RATINGS = [4.9, 4.8, 5.0, 4.7, 4.9, 4.8, 4.9, 5.0];

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
          {CREATOR_IMAGES.map((src, i) => (
            <div key={i} className={styles.creatorCard}>
              <Image
                src={src}
                alt={`Creator ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
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

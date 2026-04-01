import { useTranslations } from 'next-intl';
import styles from './CreatorsSection.module.css';

type Props = { locale: string };

export default function CreatorsSection({ locale }: Props) {
  const t = useTranslations('creators');

  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  const categories = [
    { key: 'health', icon: '💊' },
    { key: 'fashion', icon: '👗' },
    { key: 'beauty', icon: '💄' },
    { key: 'food', icon: '🍔' },
    { key: 'tech', icon: '📱' },
    { key: 'home', icon: '🏠' },
    { key: 'pets', icon: '🐾' },
    { key: 'apps', icon: '💻' },
    { key: 'kids', icon: '👶' },
  ] as const;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{t('badge')}</div>
        <h2 className={styles.headline}>{t('headline')}</h2>

        <div className={styles.categories}>
          {categories.map(({ key, icon }) => (
            <div key={key} className={styles.category}>
              <span className={styles.categoryIcon}>{icon}</span>
              <span className={styles.categoryName}>{t(key)}</span>
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

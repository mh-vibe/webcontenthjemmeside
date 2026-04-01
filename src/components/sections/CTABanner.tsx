import { useTranslations } from 'next-intl';
import styles from './CTABanner.module.css';

type Props = { locale: string };

export default function CTABanner({ locale }: Props) {
  const t = useTranslations('common');
  const hero = useTranslations('hero');
  const footer = useTranslations('footer');

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.headline}>{footer('tagline')}</h2>
        <p className={styles.sub}>{hero('subheadline')}</p>
        <div className={styles.ctas}>
          <a href="https://app.webcontent.dk/signup" className={styles.primaryCta}>
            {t('getStarted')}
          </a>
          <a href="https://calendly.com/webcontent" className={styles.secondaryCta}>
            {t('bookDemo')}
          </a>
        </div>
      </div>
    </section>
  );
}

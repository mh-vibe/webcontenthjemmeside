import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.supportCenter' });
  return { title: t('title') };
}
export default async function SupportCenterPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.supportCenter' });
  const faqT = await getTranslations({ locale, namespace: 'faq' });

  const categories = [
    { icon: '🚀', label: t('gettingStarted'), items: [faqT('q1'), faqT('q3'), faqT('q4')] },
    { icon: '💳', label: t('billing'), items: [faqT('q7'), faqT('q9')] },
    { icon: '🎬', label: t('creators'), items: [faqT('q2'), faqT('q3')] },
    { icon: '📋', label: t('campaigns'), items: [faqT('q2'), faqT('q8')] },
    { icon: '⚙️', label: t('technical'), items: [faqT('q5'), faqT('q6')] },
  ];

  return (
    <>
      <PageHero headline={t('headline')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <div key={cat.label} className={styles.categoryCard}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3 className={styles.catTitle}>{cat.label}</h3>
                <ul className={styles.catItems}>
                  {cat.items.map((item, i) => (
                    <li key={i} className={styles.catItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.contactBlock}>
            <h2 className={styles.contactTitle}>Still need help?</h2>
            <a href="mailto:info@webcontent.dk" className={styles.contactCta}>Contact support</a>
          </div>
        </div>
      </section>
    </>
  );
}

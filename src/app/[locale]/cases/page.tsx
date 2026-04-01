import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import { getAllPosts } from '@/lib/posts';
import styles from './page.module.css';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.cases' });
  return { title: t('title'), description: t('description') };
}
export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.cases' });
  const cases = getAllPosts('cases', locale);
  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          {cases.length === 0 ? (
            <p className={styles.empty}>{t('noCases')}</p>
          ) : (
            <div className={styles.grid}>
              {cases.map((c) => (
                <Link key={c.slug} href={localePath(`/cases/${c.slug}`)} className={styles.card}>
                  {c.coverImage && (
                    <div className={styles.cardImage}>
                      <Image src={c.coverImage} alt={c.title} width={600} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                  )}
                  <div className={styles.cardBody}>
                    <h2 className={styles.title}>{c.title}</h2>
                    <p className={styles.excerpt}>{c.excerpt}</p>
                    <span className={styles.readMore}>{t('readCase')} →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

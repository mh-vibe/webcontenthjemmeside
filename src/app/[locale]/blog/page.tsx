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
  const t = await getTranslations({ locale, namespace: 'pages.blog' });
  return { title: t('title'), description: t('description') };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.blog' });
  const posts = getAllPosts('blog', locale);
  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          {posts.length === 0 ? (
            <p className={styles.empty}>{t('noPosts')}</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <Link key={post.slug} href={localePath(`/blog/${post.slug}`)} className={styles.card}>
                  {post.coverImage && (
                    <div className={styles.cardImage}>
                      <Image src={post.coverImage} alt={post.title} width={600} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                  )}
                  <div className={styles.cardBody}>
                    <time className={styles.date}>{new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>{t('readMore')} →</span>
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

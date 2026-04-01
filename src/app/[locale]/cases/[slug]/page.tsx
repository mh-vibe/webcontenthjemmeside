import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import styles from './page.module.css';

type Props = { params: { locale: string; slug: string } };

export async function generateStaticParams() {
  const locales = ['da', 'en', 'sv', 'no'];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const cases = getAllPosts('cases', locale);
    for (const c of cases) {
      params.push({ locale, slug: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug('cases', slug, locale);
  if (!post) return {};
  return { title: `${post.title} | WebContent`, description: post.excerpt, openGraph: { images: post.coverImage ? [post.coverImage] : [] } };
}

export default async function CaseSlugPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = await getPostBySlug('cases', slug, locale);
  if (!post) notFound();
  const t = await getTranslations({ locale, namespace: 'pages.cases' });
  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  return (
    <article className={styles.article}>
      {post.coverImage && (
        <div className={styles.heroImage}>
          <Image src={post.coverImage} alt={post.title} width={1200} height={500} style={{ objectFit: 'cover', width: '100%', height: '100%' }} priority />
        </div>
      )}
      <div className={`container ${styles.inner}`}>
        <div className={styles.meta}>
          <Link href={localePath('/cases')} className={styles.backLink}>← {t('headline')}</Link>
          <time className={styles.date}>{new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}

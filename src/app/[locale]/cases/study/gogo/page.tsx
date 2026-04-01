import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/posts';
import styles from './page.module.css';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Gogoevent Case Study – -70% CPI | WebContent',
    description: 'How Gogoevent reduced their cost per install by 70% using UGC ads from WebContent.',
    openGraph: { images: ['https://framerusercontent.com/images/vVtSR2m66uPE4pq1qR2MjGjrZQ.png'] },
  };
}

export default async function GogoPage({ params }: Props) {
  const { locale } = await params;
  const post = await getPostBySlug('cases', 'gogo', locale);
  const t = await getTranslations({ locale, namespace: 'cases' });
  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  return (
    <article>
      <div className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Case Study</div>
            <h1 className={styles.headline}>Gogoevent</h1>
            <p className={styles.sub}>How Gogoevent reduced CPI by 70% with UGC</p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>-70%</span>
                <span className={styles.statLabel}>{t('stat1Label')}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>+50%</span>
                <span className={styles.statLabel}>{t('stat2Label')}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>4.2x</span>
                <span className={styles.statLabel}>ROAS</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="https://framerusercontent.com/images/vVtSR2m66uPE4pq1qR2MjGjrZQ.png"
              alt="Gogoevent"
              width={560}
              height={320}
              style={{ objectFit: 'cover', borderRadius: 16, width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      <div className={`container ${styles.body}`}>
        <div className={styles.testimonialBox}>
          <blockquote className={styles.quote}>"{t('testimonial')}"</blockquote>
          <cite className={styles.author}>{t('testimonialAuthor')}</cite>
        </div>

        {post ? (
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <div className={styles.content}>
            <h2>About Gogoevent</h2>
            <p>Gogoevent is a Scandinavian app for discovering and booking local events. By partnering with WebContent, they transformed their ad performance with authentic UGC content from real Scandinavian creators.</p>
            <h2>The Challenge</h2>
            <p>High CPI and ad fatigue on Meta and TikTok were limiting growth. Traditional production-based ads were underperforming and expensive to refresh.</p>
            <h2>The Solution</h2>
            <p>WebContent connected Gogoevent with 8 Scandinavian creators who produced 15 unique UGC video ads. The content featured real app experiences, social proof, and TikTok-native hooks.</p>
            <h2>Results</h2>
            <ul>
              <li><strong>-70% lower CPI</strong> – cost per install dropped dramatically</li>
              <li><strong>+50% higher UGC budget</strong> – results justified increased investment</li>
              <li><strong>CTR improved from 1.2% to 3.8%</strong></li>
              <li><strong>ROAS grew from 1.8x to 4.2x</strong></li>
            </ul>
          </div>
        )}

        <div className={styles.cta}>
          <h3>Ready to get similar results?</h3>
          <a href="https://app.webcontent.dk/signup" className={styles.ctaBtn}>Start your UGC campaign</a>
          <Link href={localePath('/cases')} className={styles.backLink}>← All cases</Link>
        </div>
      </div>
    </article>
  );
}

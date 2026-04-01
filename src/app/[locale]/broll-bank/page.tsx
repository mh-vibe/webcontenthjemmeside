import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.brollBank' });
  return { title: t('title'), description: t('description') };
}
export default async function BrollBankPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.brollBank' });
  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.visual}>
            <Image
              src="https://framerusercontent.com/images/sLhpHeZwUNj1olTOLhgwngbb4.png"
              alt="B-roll Bank"
              width={900}
              height={360}
              style={{ objectFit: 'cover', borderRadius: 16, width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.features}>
            {[
              { icon: '🎬', title: 'Professional quality', desc: 'All B-roll is shot by professional creators and vetted for quality.' },
              { icon: '⚡', title: 'Instant access', desc: 'Download and use immediately. No approval process needed.' },
              { icon: '♾️', title: 'Growing library', desc: 'New footage added weekly across all product categories.' },
              { icon: '🔓', title: 'Full commercial rights', desc: 'All clips come with full commercial license included.' },
            ].map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.icon}>{f.icon}</span>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://app.webcontent.dk/signup" className={styles.cta}>Access B-roll Bank</a>
        </div>
      </section>
    </>
  );
}

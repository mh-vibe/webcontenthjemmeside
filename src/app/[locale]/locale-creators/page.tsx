import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import CreatorsSection from '@/components/sections/CreatorsSection';
import styles from './page.module.css';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.localCreators' });
  return { title: t('title'), description: t('description') };
}

export default async function LocalCreatorsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.localCreators' });

  const CREATOR_IMAGES = [
    'https://framerusercontent.com/images/ETizEDkRfG0fBrzzk8gn14rdc.png',
    'https://framerusercontent.com/images/5ABNZSu7aUea84ijpFboyPqA0.png',
    'https://framerusercontent.com/images/G1xbbBEjrQVjTbIDe3775SR0iSs.png',
    'https://framerusercontent.com/images/I3fI9n4YwHZQR4OZXvQzMV4yH18.png',
    'https://framerusercontent.com/images/UKD82zAa1e2QqHxDPMt8Nkqmr8.png',
    'https://framerusercontent.com/images/YDBXmacVjISGXUu0wbabkt39mHY.png',
    'https://framerusercontent.com/images/axtdOHtelWv9mbAHDUQKNhKmo.png',
    'https://framerusercontent.com/images/coBx612Sm4Ihi7JMzZhG4oKaxJs.png',
  ];

  return (
    <>
      <PageHero headline={t('headline')} description={t('description')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.creatorGrid}>
            {CREATOR_IMAGES.map((src, i) => (
              <div key={i} className={styles.creatorCard}>
                <Image src={src} alt={`Creator ${i + 1}`} width={240} height={320} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CreatorsSection locale={locale} />
    </>
  );
}

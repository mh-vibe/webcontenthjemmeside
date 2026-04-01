import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from './page.module.css';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.privacy' });
  return { title: t('title') };
}
export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.privacy' });
  return (
    <>
      <PageHero headline={t('headline')} description={t('lastUpdated')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.content}>
            <h2>1. Data Controller</h2>
            <p>WebContent ApS, Hovedvagtsstræde 2C, 3000 Helsingør, Denmark. VAT: DK45178927. Email: info@webcontent.dk</p>
            <h2>2. What Data We Collect</h2>
            <p>We collect the following types of personal data: Name and email address when you register, Payment information for billing purposes, Usage data and analytics, Communication data from support interactions.</p>
            <h2>3. How We Use Your Data</h2>
            <p>We use your personal data to: Provide and improve our services, Process payments, Send service-related communications, Comply with legal obligations.</p>
            <h2>4. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to provide services. You may request deletion at any time.</p>
            <h2>5. Your Rights</h2>
            <p>Under GDPR, you have the right to access, correct, delete, and export your personal data. Contact us at info@webcontent.dk to exercise these rights.</p>
            <h2>6. Cookies</h2>
            <p>We use cookies for analytics and session management. You can control cookie settings in your browser.</p>
            <h2>7. Contact</h2>
            <p>For privacy-related questions, contact: info@webcontent.dk or +45 20 67 31 60.</p>
          </div>
        </div>
      </section>
    </>
  );
}

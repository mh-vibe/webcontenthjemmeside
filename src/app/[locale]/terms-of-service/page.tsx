import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import styles from '../privacy-policy/page.module.css';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.terms' });
  return { title: t('title') };
}
export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.terms' });
  return (
    <>
      <PageHero headline={t('headline')} description={t('lastUpdated')} />
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.content}>
            <h2>1. Acceptance of Terms</h2>
            <p>By using WebContent, you agree to these terms. If you do not agree, please do not use the service.</p>
            <h2>2. Service Description</h2>
            <p>WebContent is a UGC platform connecting brands with content creators. We facilitate campaign creation, creator matching, content delivery, and payments.</p>
            <h2>3. User Obligations</h2>
            <p>You agree to: Provide accurate information, Use the platform lawfully, Respect creator intellectual property, Pay for approved content promptly.</p>
            <h2>4. Payment Terms</h2>
            <p>SOLO plan: Free with 30% marketplace fee on content. SCALE plan: 995 DKK/month (DK) or €149/month (EU) with 9% marketplace fee. All prices exclude VAT.</p>
            <h2>5. Content Rights</h2>
            <p>Upon payment, you receive a perpetual commercial license to use the content in your advertising. Creators retain moral rights.</p>
            <h2>6. Cancellation</h2>
            <p>You may cancel your subscription at any time. No refunds for the current billing period.</p>
            <h2>7. Limitation of Liability</h2>
            <p>WebContent ApS is not liable for indirect or consequential damages. Our liability is limited to the amount paid in the past 12 months.</p>
            <h2>8. Governing Law</h2>
            <p>These terms are governed by Danish law. Disputes shall be resolved in Danish courts.</p>
            <h2>9. Contact</h2>
            <p>WebContent ApS – info@webcontent.dk – Hovedvagtsstræde 2C, 3000 Helsingør, Denmark</p>
          </div>
        </div>
      </section>
    </>
  );
}

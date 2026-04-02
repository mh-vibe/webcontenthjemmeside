import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

type FooterProps = { locale: string };

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;

  const featureLinks = [
    { label: nav('ugcPricing'), href: localePath('/ugc-pricing') },
    { label: nav('localCreators'), href: localePath('/locale-creators') },
    { label: nav('bestCreators'), href: localePath('/best-creators') },
    { label: nav('ugcTypes'), href: localePath('/ugc-types') },
    { label: nav('aiCenter'), href: localePath('/ai-center') },
    { label: nav('brollBank'), href: localePath('/broll-bank') },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          {/* Brand column */}
          <div className={styles.brand}>
            <Link href={localePath('/')}>
              <Image
                src="https://framerusercontent.com/images/bnZyGSfKgvTIvmXu3YRSONXkPiE.png"
                alt="WebContent"
                width={56}
                height={56}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className={styles.tagline}>{t('tagline')}</p>

            <div className={styles.expertsRow}>
              <span className={styles.expertsLabel}>Eksperter i:</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/jEKJk1RKf1FbpSA1OxPEl0xFg.png" alt="Meta" height={20} style={{ width: 'auto' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/TWAnC7GX1Wmv3D2Kah1ir7RfxWA.png" alt="TikTok" height={20} style={{ width: 'auto' }} />
            </div>

            <Link href={localePath('/creators')} className={styles.becomeCreatorLink}>
              {t('becomeCreator')} →
            </Link>

            <div className={styles.appBadges}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://framerusercontent.com/images/zEQ6P5x54lLUwDxRoDfcZu71ZLo.png" alt="App Store" height={40} style={{ display: 'block', width: 'auto' }} />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://framerusercontent.com/images/cVGYo4plm9kXogkopSlQXjWtylM.png" alt="Google Play" height={40} style={{ display: 'block', width: 'auto' }} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className={styles.cols}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{t('links')}</h4>
              <Link href={localePath('/pricing')} className={styles.footerLink}>{nav('pricing')}</Link>
              <Link href={localePath('/about')} className={styles.footerLink}>{nav('about')}</Link>
              <Link href={localePath('/creators')} className={styles.footerLink}>{t('becomeCreator')}</Link>
              <Link href={localePath('/contact-support')} className={styles.footerLink}>{t('contact')}</Link>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{t('knowledge')}</h4>
              <Link href={localePath('/cases')} className={styles.footerLink}>{t('cases')}</Link>
              <Link href={localePath('/blog')} className={styles.footerLink}>{t('blogs')}</Link>
              <Link href={localePath('/supportcenter')} className={styles.footerLink}>{t('support')}</Link>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Funktioner</h4>
              {featureLinks.map((l) => (
                <Link key={l.href} href={l.href} className={styles.footerLink}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/61555118136664/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/hBaxNtbVi5lW0xoLgEoOAqIidHI.png" alt="Facebook" width={18} height={18} style={{ objectFit: 'contain' }} />
            </a>
            <a href="https://www.instagram.com/webcontent.dk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/70wbFkYXogXaN9fmtBtZ5ME5DlE.png" alt="Instagram" width={18} height={18} style={{ objectFit: 'contain' }} />
            </a>
            <a href="https://dk.linkedin.com/company/webcontentdk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/euCoaJZrlPrFlIb9f6OrSoOlbc.png" alt="LinkedIn" width={18} height={18} style={{ objectFit: 'contain' }} />
            </a>
          </div>

          <div className={styles.legal}>
            <Link href={localePath('/privacy-policy')} className={styles.legalLink}>{t('cookies')}</Link>
            <Link href={localePath('/privacy-policy')} className={styles.legalLink}>{t('privacy')}</Link>
            <Link href={localePath('/terms-of-service')} className={styles.legalLink}>{t('terms')}</Link>
          </div>
        </div>

        <div className={styles.address}>
          {t('address')} &nbsp;·&nbsp; {t('vat')} &nbsp;·&nbsp; {t('copyright')}
        </div>
      </div>
    </footer>
  );
}

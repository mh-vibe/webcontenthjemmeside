'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const LOCALES = [
  { code: 'da', label: 'DA', flag: '🇩🇰' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'sv', label: 'SV', flag: '🇸🇪' },
  { code: 'no', label: 'NO', flag: '🇳🇴' },
];

const ChevronDown = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

type NavbarProps = { locale: string };

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (featuresRef.current && !featuresRef.current.contains(e.target as Node)) setFeaturesOpen(false);
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) setResourcesOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const getLocalePath = (newLocale: string) => {
    const prefix = locale === 'da' ? '' : `/${locale}`;
    const newPrefix = newLocale === 'da' ? '' : `/${newLocale}`;
    const path = prefix ? pathname.replace(prefix, '') : pathname;
    return newPrefix + path || '/';
  };

  const localePath = (path: string) => locale === 'da' ? path : `/${locale}${path}`;
  const currentLang = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const featureLinks = [
    { label: t('ugcPricing'), href: localePath('/ugc-pricing') },
    { label: t('localCreators'), href: localePath('/locale-creators') },
    { label: t('bestCreators'), href: localePath('/best-creators') },
    { label: t('ugcTypes'), href: localePath('/ugc-types') },
    { label: t('aiCenter'), href: localePath('/ai-center') },
    { label: t('brollBank'), href: localePath('/broll-bank') },
  ];

  const resourceLinks = [
    { label: t('blog'), href: localePath('/blog') },
    { label: t('cases'), href: localePath('/cases') },
    { label: t('support'), href: localePath('/supportcenter') },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.nav}`}>
          <Link href={localePath('/')} className={styles.logo}>
            <Image
              src="https://framerusercontent.com/images/bnZyGSfKgvTIvmXu3YRSONXkPiE.png"
              alt="WebContent"
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          <nav className={styles.links}>
            <div className={styles.dropdown} ref={featuresRef}>
              <button className={styles.navLink} onClick={() => setFeaturesOpen(!featuresOpen)}>
                {t('features')} <ChevronDown />
              </button>
              {featuresOpen && (
                <div className={styles.dropdownMenu}>
                  {featureLinks.map((l) => (
                    <Link key={l.href} href={l.href} className={styles.dropdownItem} onClick={() => setFeaturesOpen(false)}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={localePath('/pricing')} className={styles.navLink}>{t('pricing')}</Link>

            <div className={styles.dropdown} ref={resourcesRef}>
              <button className={styles.navLink} onClick={() => setResourcesOpen(!resourcesOpen)}>
                {t('resources')} <ChevronDown />
              </button>
              {resourcesOpen && (
                <div className={styles.dropdownMenu}>
                  {resourceLinks.map((l) => (
                    <Link key={l.href} href={l.href} className={styles.dropdownItem} onClick={() => setResourcesOpen(false)}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={localePath('/about')} className={styles.navLink}>{t('about')}</Link>
            <Link href={localePath('/creators')} className={styles.navLinkCoral}>{t('becomeCreator')}</Link>
          </nav>

          <div className={styles.right}>
            <a href="https://app.webcontent.dk/login" className={styles.loginBtn}>{t('login')}</a>
            <a href="https://app.webcontent.dk/signup" className={styles.ctaBtn}>
              {t('startFree')} →
            </a>

            <div className={styles.langSwitcher} ref={langRef}>
              <button className={styles.langBtn} onClick={() => setLangOpen(!langOpen)}>
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <ChevronDown />
              </button>
              {langOpen && (
                <div className={styles.langMenu}>
                  {LOCALES.map((l) => (
                    <Link
                      key={l.code}
                      href={getLocalePath(l.code)}
                      className={`${styles.langItem} ${l.code === locale ? styles.langItemActive : ''}`}
                      onClick={() => setLangOpen(false)}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <Link href={localePath('/')} onClick={() => setMenuOpen(false)}>
            <Image src="https://framerusercontent.com/images/bnZyGSfKgvTIvmXu3YRSONXkPiE.png" alt="WebContent" width={40} height={40} />
          </Link>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <nav className={styles.drawerNav}>
          <Link href={localePath('/pricing')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('pricing')}</Link>
          <Link href={localePath('/about')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('about')}</Link>
          <Link href={localePath('/creators')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('becomeCreator')}</Link>
          <Link href={localePath('/blog')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('blog')}</Link>
          <Link href={localePath('/cases')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('cases')}</Link>
          <Link href={localePath('/contact-support')} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{t('support')}</Link>
        </nav>
        <div className={styles.drawerLangs}>
          {LOCALES.map((l) => (
            <Link key={l.code} href={getLocalePath(l.code)} className={`${styles.drawerLang} ${l.code === locale ? styles.drawerLangActive : ''}`} onClick={() => setMenuOpen(false)}>
              {l.flag} {l.label}
            </Link>
          ))}
        </div>
        <div className={styles.drawerCtas}>
          <a href="https://app.webcontent.dk/login" className={styles.drawerLoginBtn}>{t('login')}</a>
          <a href="https://app.webcontent.dk/signup" className={styles.ctaBtn}>{t('startFree')} →</a>
        </div>
      </div>
    </>
  );
}
